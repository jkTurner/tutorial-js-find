const projects = [
    {
        id: 1,
        name: "Website Redesign",
        tasks: [
            { id: "a", title: "Wireframe" },
            { id: "b", title: "Mockup" },
        ]
    },
    {
        id: 2,
        name: "Marketing Campaign",
        tasks: [
            { id: "c", title: "Content Planning" },
            { id: "d", title: "Social Media Ads" },
        ]
    },
]

export default function FindNestedObjectPage() {

    const targetTask = "C";
    const foundTask = projects
        .flatMap(project => project.tasks)
        .find(task => task.id.toLocaleLowerCase() === targetTask.toLowerCase());

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-[600px] h-[60vh] gap-4 mx-auto">
            <h1 className="font-semibold text-lg">Find Nested Object (task in a project)</h1>
            {foundTask && (
                <span>Found Task C: {foundTask.title}</span>
            )}
        </div>
    )
}