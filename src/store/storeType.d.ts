import { appReducer } from "./rootReducer";

/**
 * Global type of store
 */
export type RootState = ReturnType<typeof appReducer>;

/**
 * Status of async operation
 */
export type TOperationStatus = "pending" | "success" | "error";
