export default function ImportantUp(){
    return <div className="mx-16 grid gap-8 lg:gap-20 lg:grid-cols-2 ">
        <div className="border py-8 bg-gray-200 rounded-2xl border-gray-400 px-10 flex flex-col">
            <div className="text-3xl font-serif lg:text-4xl"> <span className="text-red-500">Imp</span>ortant Updates</div>
            <div className="flex flex-col gap-2 pt-4">
                <div> ~ ABSTRACT SUBMISSION</div>
                <div> ~ CONFERENCE REGISTRATION</div>
                <div> ~ WORKSHOP REGISTRATION</div>
                <div> ~ HANDS-ON TRAINING REGISTRATION</div>
            </div>
        </div>
        <div className="border py-8 bg-gray-200 rounded-2xl border-gray-400 px-10 flex flex-col">
            <div className="text-3xl font-serif lg:text-4xl"> <span className="text-red-500">Imp</span>ortant Deadlines</div>
            <div className="flex flex-col gap-2 pt-4">
                <div> ~ Abstract Submission last date : 05th Nov' 25</div>
                <div> ~ Last Date for Accommodation Request : 05th Nov' 25</div>
            </div>
        </div>
    </div>
}