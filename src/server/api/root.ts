import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { messageRouter } from "./routers/message";
import { chatRouter } from "./routers/chat";
import { taskRouter } from "./routers/task-router";
import { aiRouter } from "./routers/ai";
import { communityPostRouter } from "./routers/community-post";
import { userRouter } from "./routers/user";
import { appsRouter } from "./routers/app";
import { codeAgentRouter } from "./routers/code-agent";
import { websiteRouter } from "./routers/website";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  message: messageRouter,
  chat: chatRouter,
  task: taskRouter,
  ai: aiRouter,
  communityPost : communityPostRouter,
  user : userRouter,
  app : appsRouter,
  codeAgent : codeAgentRouter,
  website : websiteRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
