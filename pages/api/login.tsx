import axios from "axios";
import { withSessionRoute } from "../../lib/withSession";

const mockUsers = [
  {
    username: "Admin User",
    email: "admin@gmail.com",
  },
  {
    username: "Just User",
    email: "justuser@gmail.com",
  },
];

export default withSessionRoute(async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { email, password } = req.body;
      const API = process.env.API;
      try {
          const response = await axios.post(`${API}/api/v1/auth/login`, {
            email, password
          });
          console.log(response);
          
          const dataUser = {
            id: response.data.data.ID,
            name: response.data.data.Name,
            email: response.data.data.Email,
            token: response.data.token,
          }
          console.log(dataUser);
          
          req.session.user = dataUser;
          await req.session.save();
          res.status(200).json({
            "message": response.data.message,
          })
      } catch (error) {
        const errorResponse = error.response.data;
        res.status(400).json({
            "message": errorResponse.message,
            "status": false
        });
      }
      break;
    default:
      res.status(405).end(`${req.method} Not Allowed`);
      break;
  }
});
