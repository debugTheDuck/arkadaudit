import express from "express"
import path from "path"
import url from "url"

// routers
import home from "./routes/home.js"
import aboutUs from "./routes/aboutUs.js"
import questions from "./routes/questions.js"
import services from "./routes/services.js"


const PORT = process.env.PORT
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()


app.use(express.static(path.join(__dirname, "public")))

// routing
app.use("/", home)
app.use("/about-us", aboutUs)
app.use("/questions", questions)
app.use("/services", services)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))