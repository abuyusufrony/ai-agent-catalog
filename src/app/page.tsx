"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store";
import { setSearchQuery, setFilterType, setSelectedAgent } from "@/app/store/agentsSlice";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AgentModal from "./page/AgentModal";
import Image from "next/image";


export default function Home() {
  const dispatch = useDispatch();
  const { agents, searchQuery, filterType, selectedAgent } = useSelector((state: RootState) => state.agents);

  const filteredAgents = agents.filter((agent) => {
    const matchSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFilter = !filterType || agent.type === filterType;
    return matchSearch && matchFilter;
  });

  return (


    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">🤖 AI Agent Catalog</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          placeholder="Search agents..."
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <Select onValueChange={(value) => dispatch(setFilterType(value || null))}>
          <SelectTrigger className="w-full sm:w-60">
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Customer Support">Customer Support</SelectItem>
            <SelectItem value="Data Analyst">Data Analyst</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={() => { dispatch(setSearchQuery("")); dispatch(setFilterType(null)); }}>
          Reset
        </Button>
      </div>

      {/* Agent Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => dispatch(setSelectedAgent(agent))}
            className="cursor-pointer"
          >
            <Card className="shadow-md hover:shadow-lg transition-shadow rounded-lg">
              <CardContent className="p-4 flex flex-col">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={agent.image}
                    alt={`Image of ${agent.name}`}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={true}
                  />
                </div>
                <h2 className="text-lg font-semibold">{agent.name}</h2>
                <p className="text-sm text-gray-500">{agent.type}</p>
                <p className="text-sm mt-2 text-muted-foreground">{agent.description.slice(0, 45)}</p>
              </CardContent>
            </Card>
          </motion.div>

        ))}
      </div>



      {selectedAgent && <AgentModal agent={selectedAgent} />}




    </main>
  );
}
