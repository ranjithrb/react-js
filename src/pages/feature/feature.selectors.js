export const getAllCourses = (state) => {
  const { course = {} } = state;
  return { ...course };
};

export default {};
