import React from 'react';
import { ExampleSection } from '../../molecules/ExampleSection/ExampleSection.jsx';
import ProposalCover from '../ProposalCover/ProposalCover.jsx';
import ProposalPage from '../ProposalPage/ProposalPage.jsx';
import InternalReport from '../InternalReport/InternalReport.jsx';
import TechnicalWhitepaper from '../TechnicalWhitepaper/TechnicalWhitepaper.jsx';
import ChatInterface from '../ChatInterface/ChatInterface.jsx';
import DataDashboard from '../DataDashboard/DataDashboard.jsx';
import EbookReader from '../EbookReader/EbookReader.jsx';
import PersonalBanking from '../PersonalBanking/PersonalBanking.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import FormElements from '../FormElements/FormElements.jsx';

const Layouts = () => {

    return (
        <ExampleSection 
            title="Layouts & Examples" 
            commentary="The following examples are not templates to be copied literally, but rather demonstrations of how to apply the principles in this guide to different contexts. The goal is to show how the brand can be both consistent and flexible, whether in a formal document or a modern web application."
        >
                <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-2">Print Document Examples</h4>
                    <div className="space-y-8">
                        {/* Proposal Cover */}
                        <ProposalCover />
                        
                        {/* Proposal Page */}
                        <ProposalPage />
                        
                        {/* Internal Report */}
                        <InternalReport />
                        
                        {/* Technical Whitepaper */}
                        <TechnicalWhitepaper />
                    </div>
                </div>

                <div className="mt-12">
                    <h4 className="font-semibold text-lg mb-2">Web App Examples</h4>
                    <div className="space-y-8">
                        {/* App Example 1: Chat Interface */}
                        <ChatInterface />
                        
                        {/* App Example 2: Dashboard */}
                        <DataDashboard />
                        
                        {/* App Example 3: E-Book Reader */}
                        <EbookReader />

                        {/* App Example 4: Personal Banking */}
                        <PersonalBanking />

                        {/* App Example 5: To-Do List */}
                        <TodoList />

                        {/* App Example 6: Form Elements */}
                        <FormElements />
                    </div>
                </div>
        </ExampleSection>
    );
};

export default Layouts;
