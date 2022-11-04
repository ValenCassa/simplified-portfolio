import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import postHandler from "services/postsHandler";
import projectHandler from "services/projectHandler";
import clientPromise from "./mongoClient";
import { postSchema, projectSchema } from "./validationSchemas";

type Middleware = "posts" | "projects";

interface IConnectToDatabase {
  req: NextApiRequest;
  res: NextApiResponse<any>;
  collection: string;
}

interface IValidateRequest {
  req: NextApiRequest;
  res: NextApiResponse<any>;
  type: Middleware;
}

const connectToDatabase = async ({
  req,
  res,
  collection,
}: IConnectToDatabase) => {
  const client = await clientPromise;
  const db = client.db("portfolio");
  const _collection = db.collection(collection);

  return {
    req,
    res,
    collection: _collection,
  };
};

const validate = async ({
  req,
  res,
  type,
}: IValidateRequest): Promise<void> => {
  const { body } = req;
  const validationSchema = type === "posts" ? postSchema : projectSchema;

  try {
    await validationSchema.validate(body);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const runMiddleware = (type: Middleware) => {
  return async (req: NextApiRequest, res: NextApiResponse<any>) => {
    const { method } = req;

    if (["POST", "PUT", "DELETE"].includes(method as string)) {
      const token = await getToken({ req });
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
    }

    if (["POST", "PUT"].includes(method as string)) {
      await validate({ req, res, type });
    }
    const { collection } = await connectToDatabase({
      req,
      res,
      collection: type,
    });
    const handler = type === "posts" ? postHandler : projectHandler;
    await handler(req, res, collection);
  };
};
