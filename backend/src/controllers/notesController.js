import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
try {
  const {title,content} = req.body
  const note = new Note({title, content})

const savedNote = await newNote.save()
  res.status(201).json(savedNote)
} catch (error) {
      console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
}
};

export const updateNote = async (req, res) => {
  res.status(200).json({ message: "post is updated successfully" });
};

export const deleteNote = async (req, res) => {
  res.status(200).json({ message: "post is deleted successfully" });
};
