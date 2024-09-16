import { apiSlice } from "../apiSlice"; // Adjust the path as necessary

const TASKS_URL = "/task";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: `${TASKS_URL}/dashboard`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getAllTask: builder.query({
      query: ({ strQuery, isTrashed, search }) => ({
        url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/create`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    duplicateTask: builder.mutation({
      query: (id) => ({
        url: `${TASKS_URL}/duplicate/${id}`,
        method: "POST",
        body: {},
        credentials: "include",
      }),
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        url: `${TASKS_URL}/update/${data._id}`, // Change `id` to `_id`
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
    trashTast: builder.mutation({
      query: ({ id }) => ({
        url: `${TASKS_URL}/${id}`,
        method: "PUT",
        credentials: "include",
      }),
    }),
createSubTask: builder.mutation({
  query: ({ data, id }) => {
    if (!id) {
      throw new Error("ID is missing");
    }
    return {
      url: `${TASKS_URL}/create-subtask/${id}`,
      method: "PUT",
      body: data,
      credentials: "include",
    };
  },
}),

getSingleTask: builder.query({ // Corrected syntax error
      query: (id) => ({
        url: `${TASKS_URL}/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    postTaskActivity: builder.mutation({ // Corrected syntax error
      query: ({data,id}) => ({
        url: `${TASKS_URL}/activity/${id}`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    deleteRestoreTast: builder.mutation({ // Corrected name
      query: ({ id, actionType }) => ({
        url: `${TASKS_URL}/delete-restore/${id}?actionType=${actionType}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});


// Export hooks for usage in functional components
export const {
  useGetDashboardStatsQuery,
  useGetAllTaskQuery,
  useCreateTaskMutation,
  useDuplicateTaskMutation,
  useUpdateTaskMutation,
  useTrashTastMutation,
  useCreateSubTaskMutation,
  useGetSingleTaskQuery,
  usePostTaskActivityMutation,
  useDeleteRestoreTastMutation,
} = taskApiSlice;
