import axios, { AxiosResponse } from "axios";
import Error from "next/error";

// const URL = "52.78.236.23";
const URL = "localhost";

export interface IResRead {
  userCurrentLearning: number;
}

export interface IResUpdate {
  email: string;
  newCurrent_learning: number;
}

export interface IResCreate {
  email: string;
}

export async function createUserCurrentLearning(
  email: string,
): Promise<IResCreate> {
  try {
    const resp: AxiosResponse<IResCreate> = await axios.post(
      `http://${URL}:3000/api/currentLearning/create`,
      {
        email: email,
      },
    );
    console.log("frontapis4,4444");
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to create (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to create:", error);
    } else {
      console.error("Failed to create: An unknown error occurred.");
    }
  }
}

export async function readUserCurrentLearning(
  email: string,
): Promise<IResRead> {
  console.log("frontapis,1111");
  try {
    console.log("frontapis2, 2222");
    const resp: AxiosResponse<IResRead> = await axios.get(
      `http://${URL}:3000/api/currentLearning/${email}`,
    );
    console.log("frontapis3,3333");
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Failed to read currentLearning (AxiosError):",
        error.message,
      );
    } else if (error instanceof Error) {
      console.error("Failed to read currentLearning:", error);
    } else {
      console.error(
        "Failed to read currentLearning: An unknown error occurred.",
      );
    }
  }
}

export async function updateUserCurrentLearning(
  email: string,
  newCurrent_learning: number,
): Promise<IResUpdate> {
  try {
    const resp: AxiosResponse<IResUpdate> = await axios.put(
      `http://${URL}:3000/api/currentLearning/update`,
      {
        email: email,
        newCurrent_learning: newCurrent_learning,
      },
    );

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to update (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to update:", error);
    } else {
      console.error("Failed to update: An unknown error occurred.");
    }
  }
}
