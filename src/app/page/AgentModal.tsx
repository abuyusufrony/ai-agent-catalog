import { useDispatch } from "react-redux";
import { setSelectedAgent, Agent } from "@/app/store/agentsSlice";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge"; // if you use shadcn badges
import { Button } from "@/components/ui/button";

interface AgentModalProps {
    agent: Agent;
}

export default function AgentModal({ agent }: AgentModalProps) {
    const dispatch = useDispatch();

    return (
        <article>
            <Dialog open={!!agent} onOpenChange={() => dispatch(setSelectedAgent(null))}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>{agent.name}</DialogTitle>
                        <DialogDescription className="text-gray-500">
                            {agent.type}
                        </DialogDescription>
                    </DialogHeader>

                    <img
                        src={agent.image}
                        alt={agent.name}
                        className="rounded w-full h-48 object-cover mb-4"
                    />

                    <p className="text-sm text-gray-700 mb-4">{agent.description}</p>

                    {/* Features List */}
                    {agent.features && (
                        <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                            {agent.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    )}

                    {/* Tags */}
                    {agent.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {agent.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {/* External Link */}
                    {agent.link && (
                        <a
                            href={agent.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            🔗 Learn more
                        </a>
                    )}
                </DialogContent>
            </Dialog>
        </article>
    );
}
