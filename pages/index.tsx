import { Geist, Geist_Mono } from "next/font/google";
import {
  getAllTodos,
  getRunningQueriesThunk,
  getTodos,
  useGetAllTodosQuery,
  useGetTodosQuery,
} from "@mikalyh/lib/features/todos/todoApiSlice";
import { useRouter } from "next/router";
import { wrapper } from "@mikalyh/lib/store";
import TodoCard from "../components/TodoCard";
import Footer from "../components/Footer";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Header from "@mikalyh/components/Header";
import Button from "@mikalyh/components/Button";
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const page = Number(context.query?.page || 1);

    store.dispatch(getTodos.initiate(page));
    store.dispatch(getAllTodos.initiate(undefined));

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

export default function HomePage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(
    Number(router.query.page || 1)
  );

  const { data: dataAll = [] } = useGetAllTodosQuery(undefined, {
    skip: router.isFallback,
  });

  const {
    data = [],
    isError,
    isFetching,
    refetch,
  } = useGetTodosQuery(currentPage, {
    skip: router.isFallback,
  });

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    router.push({ query: { page } }, undefined, { shallow: true });
  };

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans flex flex-col items-center min-h-screen px-4`}
    >
      <Head>
        <title>
          {currentPage > 1
            ? `Page ${router.query.page} | My Todo List`
            : "My Todo List"}
        </title>
      </Head>

      <Header
        title="My Todo List"
        description="Here's a collection of tasks you need to complete. Click on any card
          to view more."
      />

      <Button title="+ Create Todo" onClick={() => router.push("/create")} />

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
        <>
          <main className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-360 mb-4">
            {data.map((d) => (
              <TodoCard
                key={d.id}
                title={d.title}
                description="View more"
                completed={d.completed}
                href={`/detail/${d.id}`}
              />
            ))}
          </main>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(dataAll.length / 10)}
            onPageChange={onPageChange}
            disabled={isFetching}
          />
        </>
      )}

      <Footer />
    </div>
  );
}
