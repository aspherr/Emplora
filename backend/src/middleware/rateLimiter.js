import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const {success} = await ratelimit.limit("placeholder-key");
    if (!success) {
      return res.status(429).json({ message: "Error: Too many requests, please try again later" });
    }

    next();
    
  } catch (error) {
    console.error("Rate Limit Error: ", error);
    next(error);
  }
}

export default rateLimiter;
