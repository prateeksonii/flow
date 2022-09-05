import { createRouter } from "../context";
import { sortRouter } from "./sortRouter";

export const arrayRouter = createRouter().merge("sort.", sortRouter);
