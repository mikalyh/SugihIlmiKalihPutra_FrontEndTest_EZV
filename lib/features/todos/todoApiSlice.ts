import { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

type RootState = any; // normally inferred from state

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  refetchOnMountOrArgChange: 900,
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },

  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], number>({
      query: (page = 1) => {
        const limit = 10;
        const start = (page - 1) * limit;

        return `/todos?_start=${start}&_limit=${limit}`;
      },
    }),
    getAllTodos: builder.query<Todo[], undefined>({
      query: () => `/todos`,
    }),
    getDetailTodo: builder.query<Todo, number>({
      query: (id) => `/todos/${id}`,
    }),
    createTodo: builder.mutation<Todo, Partial<Todo> & Partial<Todo>>({
      query: ({ ...data }) => ({
        url: `/todos`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useGetTodosQuery,
  useGetDetailTodoQuery,
  useGetAllTodosQuery,
  useCreateTodoMutation,
  util: { getRunningQueriesThunk },
} = todoApi;

// export endpoints for use in SSR or ISR
export const { getTodos, getDetailTodo, getAllTodos } = todoApi.endpoints;
