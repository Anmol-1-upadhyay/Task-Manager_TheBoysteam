import clsx from "clsx";
import moment from "moment";
import React from "react";
import { FaArrowsAlt, FaNewspaper } from 'react-icons/fa';
import { LuClipboardEdit } from "react-icons/lu";
import {
  MdAdminPanelSettings,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";
import { Chart } from "../components/Chart";
import Loading from "../components/Loader";
import UserInfo from "../components/UserInfo";
import { useGetDashboardStatsQuery } from "../redux/slices/api/taskApiSlice";
import { BGS, PRIOTITYSTYELS, TASK_TYPE, getInitials } from "../utils";

const TaskTable = ({ tasks }) => {
  const ICONS = {
    high: <MdKeyboardDoubleArrowUp />,
    medium: <MdKeyboardArrowUp />,
    low: <MdKeyboardArrowDown />,
  };

  const TableHeader = () => (
    <thead className='border-b border-gray-600'>
      <tr className='text-white text-left'>
        <th className='py-2'>Task Title</th>
        <th className='py-2'>Priority</th>
        <th className='py-2'>Team</th>
        <th className='py-2 hidden md:block'>Created At</th>
      </tr>
    </thead>
  );

  const TableRow = ({ task }) => (
    <tr className='border-b border-gray-700 text-gray-300 hover:bg-gray-700/10'>
      <td className='py-2'>
        <div className='flex items-center gap-2'>
          <div className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])} />
          <p className='text-base text-white'>{task.title}</p>
        </div>
      </td>

      <td className='py-2'>
        <div className='flex gap-1 items-center'>
          <span className={clsx("text-lg", PRIOTITYSTYELS[task.priority])}>
            {ICONS[task.priority]}
          </span>
          <span className='capitalize text-gray-200'>{task.priority}</span>
        </div>
      </td>

      <td className='py-2'>
        <div className='flex'>
          {task.team.map((m, index) => (
            <div
              key={m.id} // Ensure unique key for each team member
              className={clsx(
                "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",
                BGS[index % BGS.length]
              )}
            >
              <UserInfo user={m} />
            </div>
          ))}
        </div>
      </td>
      <td className='py-2 hidden md:block'>
      <span className='text-sm text-gray-400'>
  {moment(task?.date).format('YYYY-MM-DD [') + moment(task?.date).format('HH:mm:ss') + ']'}
</span>

      </td>
    </tr>
  );

  return (
    <div className='w-full md:w-2/3 bg-gray-800 px-2 md:px-4 pt-4 pb-4 shadow-md rounded'>
      <table className='w-full'>
        <TableHeader />
        <tbody>
          {tasks?.map((task) => (
            <TableRow key={task.id} task={task} /> // Ensure unique key
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserTable = ({ users }) => {
  const TableHeader = () => (
    <thead className='border-b border-gray-600'>
      <tr className='text-white text-left'>
        <th className='py-2'>Full Name</th>
        <th className='py-2'>Status</th>
        <th className='py-2'>Created At</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className='border-b border-gray-700 text-gray-300 hover:bg-gray-700/10'>
      <td className='py-2'>
        <div className='flex items-center gap-3'>
          <div className='w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-violet-700'>
            <span className='text-center'>{getInitials(user?.name)}</span>
          </div>

          <div>
            <p>{user.name}</p>
            <span className='text-xs text-gray-400'>{user?.role}</span>
          </div>
        </div>
      </td>

      <td>
        <p
          className={clsx(
            "w-fit px-3 py-1 rounded-full text-sm text-white",
            user?.isActive ? "bg-blue-400" : "bg-yellow-700"
          )}
        >
          {user?.isActive ? "Disabled" : "Active"}
        </p>
      </td>
      <td className='py-2 text-sm text-gray-400'>
       <span className='relative'>
  {moment(user?.createdAt).format('YYYY-MM-DD') + ' [' + moment(user?.createdAt).format('HH:mm:ss') + ']'}
  <span className='absolute left-0 bottom-0 text-xs text-gray-500 hidden group-hover:block'>
    {moment(user?.createdAt).format('dddd, MMMM D, YYYY, h:mm:ss A')}
  </span>
</span>

      </td>
    </tr>
  );

  return (
    <div className='w-full md:w-1/3 bg-gray-800 h-fit px-2 md:px-6 py-4 shadow-md rounded'>
      <table className='w-full mb-5'>
        <TableHeader />
        <tbody>
          {users?.map((user) => (
            <TableRow key={user._id} user={user} /> // Ensure unique key
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Dashboard = () => {
  const { data, isLoading } = useGetDashboardStatsQuery();

  if (isLoading) {
    return (
      <div className='py-10'>
        <Loading />
      </div>
    );
  }

  const totals = data?.tasks;

  const stats = [
    {
      _id: "1",
      label: "TOTAL TASKS",
      total: data?.totalTasks || 0,
      icon: <FaNewspaper />,
      bg: "bg-blue-700",
    },
    {
      _id: "2",
      label: "COMPLETED TASKS",
      total: totals["completed"] || 0,
      icon: <MdAdminPanelSettings />,
      bg: "bg-teal-700",
    },
    {
      _id: "3",
      label: "TASKS IN PROGRESS",
      total: totals["in progress"] || 0,
      icon: <LuClipboardEdit />,
      bg: "bg-yellow-700",
    },
    {
      _id: "4",
      label: "TODOS",
      total: totals["todo"] || 0,
      icon: <FaArrowsAlt />,
      bg: "bg-pink-700",
    },
  ];

  const Card = ({ label, count, bg, icon }) => (
    <div className='w-full h-32 bg-gray-800 p-5 shadow-md rounded-md flex items-center justify-between'>
      <div className='h-full flex flex-1 flex-col justify-between'>
        <p className='text-base text-gray-400'>{label}</p>
        <span className='text-2xl font-semibold text-white'>{count}</span>
      </div>

      <div
        className={clsx(
          "w-10 h-10 rounded-full flex items-center justify-center text-white",
          bg
        )}
      >
        {icon}
      </div>
    </div>
  );

  return (
    <div className='h-full py-4 bg-gray-900'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        {stats.map(({ icon, bg, label, total }) => (
          <Card key={label} icon={icon} bg={bg} label={label} count={total} />
        ))}
      </div>

      <div className='w-full bg-gray-800 my-16 p-4 rounded shadow-sm'>
        <h4 className='text-xl text-gray-300 font-semibold text-center'>
          Chart by Priority
        </h4>

        <Chart data={data?.graphData} />
      </div>

      <div className='w-full flex flex-col md:flex-row gap-4 2xl:gap-10 py-8'>
        <TaskTable tasks={data?.last10Task} />
        <UserTable users={data?.users} />
      </div>
    </div>
  );
};

export default Dashboard;
