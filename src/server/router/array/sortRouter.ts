import { selectionSort } from "@server/algorithms/sort/selectionSort";
import { number, z } from "zod";
import { createRouter } from "../context";

export const sortRouter = createRouter().mutation("selection-sort", {
  input: z.object({
    list: z.number().array(),
  }),
  async resolve({ ctx, input }) {
    const steps = selectionSort(input.list);

    return steps;
  },
});
