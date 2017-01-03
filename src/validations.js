export function newPostValidate(formProps) {
  const errors = {};

  if (!formProps.title || formProps.title.trim() === '') {
    errors.title = "Enter a Title";
  }
  if (!formProps.categories || formProps.categories.trim() === '') {
    errors.categories = "Enter categories";
  }
  if(!formProps.content || formProps.content.trim() === '') {
    errors.content = "Enter some content";
  }

  return errors;
}
