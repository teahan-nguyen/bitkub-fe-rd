import {OrgChart} from "@/pages/components/chart/OrgChart";
import {TimelineChart} from "@/pages/components/chart/TimelineChart";
import React from 'react';

export default function Home() {
    const [isOrg, setIsOrg] = React.useState(true);
    return (
        <>
            <div className="inline-flex rounded-md shadow-sm pt-2" role="group">
                <button type="button" onClick={() => setIsOrg(true)}
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    Org Chart
                </button>
                <button type="button" onClick={() => setIsOrg(false)}
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                    Timeline Chart
                </button>
            </div>

            {isOrg ? <OrgChart/> : <TimelineChart/>}
        </>
    );
}
