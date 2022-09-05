import { trpc } from "@/utils/trpc";
import { Step } from "@server/common/types/Step";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TryItProps = {
  name: string;
};

type TryItFormValues = {
  list: string;
};

const TryIt: FC<TryItProps> = ({ name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TryItFormValues>();

  const { mutateAsync } = trpc.useMutation("array.sort.selection-sort");

  const [steps, setSteps] = useState<Step<number[]>[]>([]);

  const onSubmit: SubmitHandler<TryItFormValues> = async (values) => {
    const { list: listString } = values;
    const list: number[] = listString.split(",").map((el) => +el);
    setSteps(await mutateAsync({ list }));
  };

  console.log(steps);

  if (name === "selection-sort")
    return (
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="input" className="label">
            <span className="label-text text-primary-content">
              Enter numbers separated by commas
            </span>
          </label>
          <input
            id="list"
            type="text"
            {...register("list", {
              required: true,
              pattern: {
                value: /\s*\d+\s*(,\s*\d+)*\s*/,
                message:
                  "Invalid pattern. Please type a comma separated numbers (e.g. 1,2,3)",
              },
            })}
            className="input bg-base-200 text-primary-content"
            placeholder="eg. 1, 4, 3, 2, 10, 5"
          />
          <span className="mt-2 label-text-alt text-error">
            {errors.list?.message}
          </span>
        </div>
      </form>
    );

  return <div></div>;
};

export default TryIt;
