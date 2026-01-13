const errorHandler = (error) => {
  if (!error.response) {
    return { message: "Network error", status: null };
  }

  const status = error.response.status;
  const message =
    error.response?.data?.error || "Something went wrong";

  return { status, message };
};

export default errorHandler;
