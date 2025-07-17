import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Footer from "@mikalyh/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import { useCreateTodoMutation } from "@mikalyh/lib/features/todos/todoApiSlice";
import Header from "@mikalyh/components/Header";
import Button from "@mikalyh/components/Button";
import { useProgress } from "@bprogress/next";
import Animation from "@mikalyh/components/Animation";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function CreateTodoPage() {
  const router = useRouter();
  const bprogress = useProgress();
  const [createTodo, { isLoading, isError, isSuccess, reset }] =
    useCreateTodoMutation();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    completed: Yup.boolean(),
  });

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans flex flex-col items-center min-h-screen px-4`}
    >
      <Head>
        <title>Create New Todo</title>
      </Head>

      <Header
        title="Create New Todo"
        description="Fill out the form to add a new task to your list."
      />

      <Button
        title="← Back to list"
        onClick={() => {
          router.back();
          bprogress.start();
        }}
      />

      {(isError || isSuccess) && !isLoading ? (
        <>
          {isError ? (
            <Animation
              animationType="error"
              description="Oops, Something went wrong!"
              action={() => {
                reset();
              }}
              actionText="Create again"
            />
          ) : isSuccess ? (
            <Animation
              animationType="success"
              description="Task Successfully created!"
              action={() => {
                reset();
              }}
              actionText="Create again"
            />
          ) : null}
        </>
      ) : (
        <main
          className={`w-full max-w-xl bg-white shadow-md rounded-lg p-6 mb-12 `}
        >
          {/* Form */}
          <Formik
            initialValues={{
              title: "",
              description: "",
              completed: false,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              const data: Partial<Todo> = { ...values, userId: 999 };
              const result = await createTodo(data).unwrap();

              if (result.id) {
                resetForm();
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                {/* Title */}
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <Field
                    name="title"
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg border-gray-200 focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <Field
                    name="description"
                    as="textarea"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-lg border-gray-200 focus:outline-none focus:ring focus:ring-blue-400"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Completed */}
                <div className="flex items-center gap-2 ">
                  <Field
                    type="checkbox"
                    name="completed"
                    id="completed"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="completed"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    Mark as completed
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition active:scale-95 duration-150 ease-in-out disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Create Todo"}
                </button>
              </Form>
            )}
          </Formik>
        </main>
      )}

      <Footer />
    </div>
  );
}
