import Button from "@mikalyh/components/Button";
import Footer from "@mikalyh/components/Footer";
import Header from "@mikalyh/components/Header";
import TodoDetail from "@mikalyh/components/TodoDetail";
import {
  getAllTodos,
  getDetailTodo,
  getRunningQueriesThunk,
  useGetDetailTodoQuery,
} from "@mikalyh/lib/features/todos/todoApiSlice";
import { makeStore, wrapper } from "@mikalyh/lib/store";
import { useProgress } from "@bprogress/next";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
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

export async function getStaticPaths() {
  const store = makeStore();
  const result = await store.dispatch(getAllTodos.initiate(undefined));
  const resultData = result.data || [];

  const paths = resultData.map((p) => ({
    params: { id: String(p.id) },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const id = Number(context.params?.id || 0);

    if (id > 0) {
      store.dispatch(getDetailTodo.initiate(id));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

export default function TodoPage() {
  const router = useRouter();
  const bprogress = useProgress();
  const id = Number(router.query.id || 1);

  const { data, isError, isFetching, refetch } = useGetDetailTodoQuery(id, {
    skip: router.isFallback,
  });

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans flex flex-col items-center min-h-screen px-4`}
    >
      <Head>
        <title>{`${data?.title} | Todo Detail`}</title>
      </Head>

      <Header
        title="Todo Detail"
        description="You are viewing the full details of this task."
      />

      <Button
        title="← Back to list"
        onClick={() => {
          router.back();
          bprogress.start();
        }}
      />

      {isError && !isFetching ? (
        <Animation
          animationType="error"
          description="Oops, Something went wrong!"
          action={() => {
            refetch();
          }}
          actionText="Try again"
        />
      ) : (
        <TodoDetail data={data} />
      )}

      <Footer />
    </div>
  );
}
