import { Collection, Document, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

// prettier-ignore
const postHandler = async (req: NextApiRequest, res: NextApiResponse, collection: Collection<Document>) => {
  const { method } = req;
  const posts = collection

  const { query, body } = req;
  const { id: queryID } = query;

  const id = queryID ? new ObjectId(queryID as any) : null;

  switch (method) {
    case "GET":
      try {
        if (id) {
          const post = await posts.findOne({ "_id": id });
          const formattedPost = post ? { ...post, id: post._id } : null;
          return res.status(200).json(formattedPost);
        }

        const data = await posts.find({}).toArray();
        const formattedPosts = data.map((post) => {
          const { _id, ...rest } = post;
          return { id: _id, ...rest };
        });
        return res.status(200).json(formattedPosts);
      } catch (error) {
        return res.status(500).json(error);
      }
    case "POST":
      try {
        const data = await posts.insertOne(body);
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json(error);
      }
    case "PUT":
      try {
        const data = await posts.updateOne({ _id: id }, { $set: body });
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json(error);
      }
    case "DELETE":
      try {
        const data = await posts.deleteOne({ _id: id });
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json(error);
      }
  }
};

export default postHandler;
