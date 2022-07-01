import { NextApiResponse } from "next";

export default (req, res: NextApiResponse) => {
  res.setPreviewData("test", {
    maxAge: 30,
  });
  res.redirect(req.query.route);
};
