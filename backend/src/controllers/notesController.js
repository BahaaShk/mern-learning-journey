export const getAllNotes = (req, res) => {
  res.status(200).send("you successfully fetched data from server");
};

export const createNote = (req, res) => {
  res.status(201).json({ message: "post is created successfully" });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: "post is updated successfully" });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "post is deleted successfully" });
};
