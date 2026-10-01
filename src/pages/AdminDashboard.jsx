import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        technologies: "",
        github: "",
        liveDemo: "",
        image: "",
    });

    // NEW: image upload state
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [uploadingImage, setUploadingImage] = useState(false);

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/admin/login");
    };

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/projects"
                );

                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    // NEW: handle selected image
    const handleImageSelect = (file) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert("Image must be smaller than 5MB.");
            return;
        }

        setSelectedImage(file);

        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
    };

    // NEW: file picker
    const handleFileInput = (e) => {
        const file = e.target.files[0];
        handleImageSelect(file);
    };

    // NEW: drag and drop
    const handleDrop = (e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];
        handleImageSelect(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // NEW: upload image
    const uploadImage = async () => {
        // If editing and no new image was selected,
        // keep the existing image.
        if (!selectedImage) {
            return formData.image;
        }

        setUploadingImage(true);

        try {
            const imageData = new FormData();

            imageData.append("image", selectedImage);

            const response = await fetch(
                "http://localhost:5000/api/upload",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: imageData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Image upload failed"
                );
            }

            return data.imageUrl;
        } catch (error) {
            console.error("Image upload failed:", error);
            alert("Image upload failed.");
            return null;
        } finally {
            setUploadingImage(false);
        }
    };

    const handleAddProject = async (e) => {
        e.preventDefault();

        const imageUrl = await uploadImage();

        if (selectedImage && !imageUrl) {
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/projects",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        ...formData,
                        image: imageUrl,
                        technologies: formData.technologies
                            .split(",")
                            .map((technology) => technology.trim())
                            .filter(Boolean),
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to add project"
                );
            }

            setProjects((previous) => [...previous, data]);

            resetForm();
        } catch (error) {
            console.error("Failed to add project:", error);
            alert(error.message);
        }
    };

    const handleEditClick = (project) => {
        setEditingProject(project);

        setFormData({
            title: project.title || "",
            description: project.description || "",
            technologies: Array.isArray(project.technologies)
                ? project.technologies.join(", ")
                : "",
            github: project.github || "",
            liveDemo: project.liveDemo || "",
            image: project.image || "",
        });

        // NEW: show existing image when editing
        setSelectedImage(null);
        setImagePreview(project.image || "");

        setShowForm(true);
    };

    const handleUpdateProject = async (e) => {
        e.preventDefault();

        const imageUrl = await uploadImage();

        if (selectedImage && !imageUrl) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:5000/api/projects/${editingProject._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        ...formData,
                        image: imageUrl,
                        technologies: formData.technologies
                            .split(",")
                            .map((technology) => technology.trim())
                            .filter(Boolean),
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to update project"
                );
            }

            setProjects((previous) =>
                previous.map((project) =>
                    project._id === editingProject._id
                        ? data
                        : project
                )
            );

            resetForm();
        } catch (error) {
            console.error("Failed to update project:", error);
            alert(error.message);
        }
    };

    const handleDeleteProject = async (projectId) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this project?"
        );

        if (!confirmed) return;

        try {
            const response = await fetch(
                `http://localhost:5000/api/projects/${projectId}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to delete project"
                );
            }

            setProjects((previous) =>
                previous.filter(
                    (project) => project._id !== projectId
                )
            );
        } catch (error) {
            console.error("Failed to delete project:", error);
            alert(error.message);
        }
    };

    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            technologies: "",
            github: "",
            liveDemo: "",
            image: "",
        });

        setSelectedImage(null);
        setImagePreview("");
        setEditingProject(null);
        setShowForm(false);
    };

    return (
        <div className="min-h-screen bg-[#07051a] text-white px-6 py-8">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Admin Dashboard
                        </h1>

                        <p className="text-gray-400 mt-1">
                            Manage your portfolio projects
                        </p>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
                    >
                        Logout
                    </button>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                        <p className="text-gray-400 text-sm">
                            Total Projects
                        </p>

                        <p className="text-3xl font-bold mt-2">
                            {projects.length}
                        </p>
                    </div>
                </div>

                {/* PROJECTS */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">
                            Projects
                        </h2>

                        <button
                            onClick={() => {
                                resetForm();
                                setShowForm(true);
                            }}
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
                        >
                            + Add Project
                        </button>
                    </div>

                    {/* FORM */}
                    {showForm && (
                        <form
                            onSubmit={
                                editingProject
                                    ? handleUpdateProject
                                    : handleAddProject
                            }
                            className="mb-8 p-6 bg-black/20 border border-white/10 rounded-xl"
                        >
                            <h3 className="text-lg font-semibold mb-5">
                                {editingProject
                                    ? "Edit Project"
                                    : "Add Project"}
                            </h3>

                            <div className="grid gap-4">

                                {/* TITLE */}
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Project title"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-purple-500"
                                />

                                {/* DESCRIPTION */}
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Project description"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-purple-500"
                                />

                                {/* TECHNOLOGIES */}
                                <input
                                    type="text"
                                    name="technologies"
                                    value={formData.technologies}
                                    onChange={handleChange}
                                    placeholder="Technologies: React, TypeScript, MongoDB"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-purple-500"
                                />

                                {/* GITHUB */}
                                <input
                                    type="url"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                    placeholder="GitHub URL"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-purple-500"
                                />

                                {/* LIVE DEMO */}
                                <input
                                    type="url"
                                    name="liveDemo"
                                    value={formData.liveDemo}
                                    onChange={handleChange}
                                    placeholder="Live Demo URL"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-purple-500"
                                />

                                {/* IMAGE UPLOAD */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Project Image
                                    </label>

                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    "project-image"
                                                )
                                                .click()
                                        }
                                        className="border-2 border-dashed border-white/10 hover:border-purple-500 rounded-lg p-6 text-center cursor-pointer transition"
                                    >
                                        <input
                                            id="project-image"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileInput}
                                            className="hidden"
                                        />

                                        {imagePreview ? (
                                            <div>
                                                <img
                                                    src={imagePreview}
                                                    alt="Project preview"
                                                    className="mx-auto max-h-48 rounded-lg object-cover"
                                                />

                                                <p className="text-sm text-gray-400 mt-3">
                                                    Click or drop another
                                                    image to replace it
                                                </p>
                                            </div>
                                        ) : (
                                            <>
                                                <p className="text-gray-300">
                                                    Drag & drop an image here
                                                </p>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    or click to choose a file
                                                </p>

                                                <p className="text-xs text-gray-600 mt-2">
                                                    Maximum size: 5MB
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-3 mt-6">
                                <button
                                    type="submit"
                                    disabled={uploadingImage}
                                    className="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-lg transition"
                                >
                                    {uploadingImage
                                        ? "Uploading..."
                                        : editingProject
                                        ? "Update Project"
                                        : "Add Project"}
                                </button>

                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}

                    {/* PROJECT LIST */}
                    {loading ? (
                        <p className="text-gray-400">
                            Loading projects...
                        </p>
                    ) : projects.length === 0 ? (
                        <p className="text-gray-400">
                            No projects yet.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <div
                                    key={project._id}
                                    className="p-5 bg-black/20 border border-white/10 rounded-xl"
                                >
                                    <div className="flex flex-col md:flex-row gap-5">

                                        {project.image && (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full md:w-40 h-28 object-cover rounded-lg"
                                            />
                                        )}

                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold">
                                                {project.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm mt-2">
                                                {project.description}
                                            </p>

                                            <p className="text-purple-400 text-sm mt-2">
                                                {Array.isArray(
                                                    project.technologies
                                                )
                                                    ? project.technologies.join(
                                                          " • "
                                                      )
                                                    : project.technologies}
                                            </p>

                                            <div className="flex gap-3 mt-4">
                                                <button
                                                    onClick={() =>
                                                        handleEditClick(
                                                            project
                                                        )
                                                    }
                                                    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        handleDeleteProject(
                                                            project._id
                                                        )
                                                    }
                                                    className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;