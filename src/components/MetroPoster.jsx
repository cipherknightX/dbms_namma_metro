import React from 'react';
import { Train, Users, CreditCard, MapPin } from 'lucide-react';

export default function MetroPoster() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        
        {/* Header */}
        <div className="text-center mb-8 border-b-4 border-indigo-600 pb-6">
          <h1 className="text-5xl font-bold text-indigo-900 mb-3">Namma Metro Database Management System</h1>
          <p className="text-xl text-gray-600">AAT-Assessment Method for Theory: Poster Presentation </p>
        </div>

        {/* System Overview */}
        <div className="mb-8 bg-indigo-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
            <Train className="w-7 h-7" />
            System Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Metro Database System manages the complete operations of namma metro rail network. 
            It handles passenger information, ticketing, route management, train schedules, and fare calculations. 
            The system ensures efficient tracking of journeys, revenue collection, and operational analytics for 
            metro administrators while providing seamless travel experience for commuters.
          </p>
        </div>

{/* ER Diagram */}
<div className="mb-8">
  <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
    <MapPin className="w-7 h-7" />
    Entity-Relationship Diagram
  </h2>
  
  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border-2 border-indigo-200 shadow-lg">
    <svg viewBox="0 0 1600 1100" className="w-full h-auto">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#1E40AF" />
        </marker>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="2" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g transform="translate(20,0)">


      {/* PASSENGER Entity */}
      <g filter="url(#shadow)">
        <rect x="100" y="100" width="180" height="70" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" rx="5"/>
        <text x="190" y="140" textAnchor="middle" fill="#1E40AF" fontSize="18" fontWeight="bold">PASSENGER</text>
      </g>
      
      {/* PASSENGER Attributes */}
      <ellipse cx="100" cy="35" rx="70" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="100" y="37" textAnchor="middle" fill="#1E40AF" fontSize="13" fontWeight="bold" textDecoration="underline">passenger_id</text>
      <text x="100" y="49" textAnchor="middle" fill="#1E40AF" fontSize="11" fontStyle="italic">(PK)</text>
      <line x1="130" y1="55" x2="150" y2="100" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="250" cy="35" rx="45" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="250" y="41" textAnchor="middle" fill="#1E40AF" fontSize="13">name</text>
      <line x1="240" y1="55" x2="220" y2="100" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="30" cy="135" rx="40" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="30" y="141" textAnchor="middle" fill="#1E40AF" fontSize="13">phone</text>
      <line x1="70" y1="135" x2="100" y2="135" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="330" cy="135" rx="40" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="330" y="141" textAnchor="middle" fill="#1E40AF" fontSize="13">email</text>
      <line x1="290" y1="135" x2="280" y2="135" stroke="#1E40AF" strokeWidth="2"/>

      {/* CARD Entity */}
      <g filter="url(#shadow)">
        <rect x="100" y="450" width="180" height="70" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" rx="5"/>
        <text x="190" y="490" textAnchor="middle" fill="#1E40AF" fontSize="18" fontWeight="bold">CARD</text>
      </g>
      
      {/* CARD Attributes */}
      <ellipse cx="50" cy="600" rx="50" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="50" y="600" textAnchor="middle" fill="#1E40AF" fontSize="13" fontWeight="bold" textDecoration="underline">card_id</text>
      <text x="50" y="612" textAnchor="middle" fill="#1E40AF" fontSize="11" fontStyle="italic">(PK)</text>
      <line x1="85" y1="580" x2="130" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="190" cy="600" rx="55" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="190" y="606" textAnchor="middle" fill="#1E40AF" fontSize="13">card_type</text>
      <line x1="190" y1="575" x2="190" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="330" cy="600" rx="50" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="330" y="606" textAnchor="middle" fill="#1E40AF" fontSize="13">balance</text>
      <line x1="295" y1="580" x2="250" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      {/* FK solid red */}
      <ellipse cx="30" cy="485" rx="65" ry="25" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
      <text x="30" y="485" textAnchor="middle" fill="#DC2626" fontSize="12">passenger_id</text>
      <text x="30" y="497" textAnchor="middle" fill="#DC2626" fontSize="11" fontStyle="italic">(FK)</text>
      <line x1="90" y1="485" x2="100" y2="485" stroke="#DC2626" strokeWidth="2"/>

      {/* STATION Entity */}
      <g filter="url(#shadow)">
        <rect x="650" y="100" width="180" height="70" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" rx="5"/>
        <text x="740" y="140" textAnchor="middle" fill="#1E40AF" fontSize="18" fontWeight="bold">STATION</text>
      </g>
      
      {/* STATION Attributes */}
      <ellipse cx="620" cy="30" rx="60" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="620" y="30" textAnchor="middle" fill="#1E40AF" fontSize="13" fontWeight="bold" textDecoration="underline">station_id</text>
      <text x="620" y="42" textAnchor="middle" fill="#1E40AF" fontSize="11" fontStyle="italic">(PK)</text>
      <line x1="660" y1="50" x2="690" y2="100" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="780" cy="30" rx="70" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="780" y="36" textAnchor="middle" fill="#1E40AF" fontSize="13">station_name</text>
      <line x1="760" y1="50" x2="750" y2="100" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="890" cy="135" rx="50" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="890" y="141" textAnchor="middle" fill="#1E40AF" fontSize="13">location</text>
      <line x1="860" y1="135" x2="830" y2="135" stroke="#1E40AF" strokeWidth="2"/>
      
      {/* FK solid red */}
      <ellipse cx="540" cy="135" rx="50" ry="25" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
      <text x="540" y="137" textAnchor="middle" fill="#DC2626" fontSize="12">line_id</text>
      <text x="540" y="149" textAnchor="middle" fill="#DC2626" fontSize="11" fontStyle="italic">(FK)</text>
      <line x1="590" y1="135" x2="650" y2="135" stroke="#DC2626" strokeWidth="2"/>

      {/* LINE Entity */}
      <g filter="url(#shadow)">
        <rect x="1100" y="100" width="180" height="70" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" rx="5"/>
        <text x="1190" y="140" textAnchor="middle" fill="#1E40AF" fontSize="18" fontWeight="bold">LINE</text>
      </g>
      
      {/* LINE Attributes */}
      <ellipse cx="1080" cy="30" rx="50" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="1080" y="30" textAnchor="middle" fill="#1E40AF" fontSize="13" fontWeight="bold" textDecoration="underline">line_id</text>
      <text x="1080" y="42" textAnchor="middle" fill="#1E40AF" fontSize="11" fontStyle="italic">(PK)</text>
      <line x1="1110" y1="50" x2="1140" y2="100" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="1210" cy="30" rx="60" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="1210" y="36" textAnchor="middle" fill="#1E40AF" fontSize="13">line_name</text>
      <line x1="1200" y1="50" x2="1200" y2="100" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="1340" cy="135" rx="65" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="1340" y="141" textAnchor="middle" fill="#1E40AF" fontSize="13">color_code</text>
      <line x1="1300" y1="135" x2="1280" y2="135" stroke="#1E40AF" strokeWidth="2"/>

      {/* JOURNEY Entity */}
      <g filter="url(#shadow)">
        <rect x="650" y="450" width="180" height="70" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" rx="5"/>
        <text x="740" y="490" textAnchor="middle" fill="#1E40AF" fontSize="18" fontWeight="bold">JOURNEY</text>
      </g>
      
      {/* JOURNEY Attributes */}
      <ellipse cx="640" cy="620" rx="65" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="640" y="620" textAnchor="middle" fill="#1E40AF" fontSize="13" fontWeight="bold" textDecoration="underline">journey_id</text>
      <text x="640" y="632" textAnchor="middle" fill="#1E40AF" fontSize="11" fontStyle="italic">(PK)</text>
      <line x1="670" y1="600" x2="690" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="770" cy="620" rx="60" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="770" y="626" textAnchor="middle" fill="#1E40AF" fontSize="13">entry_time</text>
      <line x1="760" y1="595" x2="750" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="900" cy="620" rx="55" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="900" y="626" textAnchor="middle" fill="#1E40AF" fontSize="13">exit_time</text>
      <line x1="870" y1="600" x2="810" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      {/* FK solid red */}
      <ellipse cx="510" cy="620" rx="50" ry="25" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
      <text x="510" y="620" textAnchor="middle" fill="#DC2626" fontSize="12">card_id</text>
      <text x="510" y="632" textAnchor="middle" fill="#DC2626" fontSize="11" fontStyle="italic">(FK)</text>
      <line x1="555" y1="610" x2="650" y2="520" stroke="#DC2626" strokeWidth="2"/>
      
      {/* FK solid red */}
      <ellipse cx="490" cy="365" rx="80" ry="25" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
      <text x="490" y="365" textAnchor="middle" fill="#DC2626" fontSize="12">entry_station_id</text>
      <text x="490" y="377" textAnchor="middle" fill="#DC2626" fontSize="11" fontStyle="italic">(FK)</text>
      <line x1="565" y1="375" x2="650" y2="450" stroke="#DC2626" strokeWidth="2"/>
      
      {/* FK solid red */}
      <ellipse cx="980" cy="365" rx="75" ry="25" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
      <text x="980" y="365" textAnchor="middle" fill="#DC2626" fontSize="12">exit_station_id</text>
      <text x="980" y="377" textAnchor="middle" fill="#DC2626" fontSize="11" fontStyle="italic">(FK)</text>
      <line x1="910" y1="375" x2="820" y2="450" stroke="#DC2626" strokeWidth="2"/>

      {/* FARE Entity */}
      <g filter="url(#shadow)">
        <rect x="1100" y="450" width="180" height="70" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="3" rx="5"/>
        <text x="1190" y="490" textAnchor="middle" fill="#1E40AF" fontSize="18" fontWeight="bold">FARE</text>
      </g>
      
      {/* FARE Attributes */}
      <ellipse cx="1070" cy="610" rx="50" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="1070" y="610" textAnchor="middle" fill="#1E40AF" fontSize="13" fontWeight="bold" textDecoration="underline">fare_id</text>
      <text x="1070" y="622" textAnchor="middle" fill="#1E40AF" fontSize="11" fontStyle="italic">(PK)</text>
      <line x1="1100" y1="590" x2="1140" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="1200" cy="610" rx="50" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="1200" y="616" textAnchor="middle" fill="#1E40AF" fontSize="13">amount</text>
      <line x1="1200" y1="585" x2="1200" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      <ellipse cx="1320" cy="610" rx="60" ry="25" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
      <text x="1320" y="616" textAnchor="middle" fill="#1E40AF" fontSize="13">distance</text>
      <line x1="1285" y1="590" x2="1250" y2="520" stroke="#1E40AF" strokeWidth="2"/>
      
      {/* FK solid red */}
      <ellipse cx="960" cy="550" rx="85" ry="25" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
      <text x="960" y="550" textAnchor="middle" fill="#DC2626" fontSize="12">from_station_id</text>
      <text x="960" y="562" textAnchor="middle" fill="#DC2626" fontSize="11" fontStyle="italic">(FK)</text>
      <line x1="1040" y1="540" x2="1100" y2="500" stroke="#DC2626" strokeWidth="2"/>
      
      {/* FK solid red */}
      <ellipse cx="960" cy="310" rx="80" ry="25" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
      <text x="960" y="310" textAnchor="middle" fill="#DC2626" fontSize="12">to_station_id</text>
      <text x="960" y="322" textAnchor="middle" fill="#DC2626" fontSize="11" fontStyle="italic">(FK)</text>
      <line x1="1030" y1="325" x2="1100" y2="450" stroke="#DC2626" strokeWidth="2"/>

      {/* Relationships */}
      
      {/* OWNS Relationship (PASSENGER-CARD) */}
      <g filter="url(#shadow)">
        <polygon points="190,285 225,320 190,355 155,320" fill="#FEF3C7" stroke="#D97706" strokeWidth="3"/>
        <text x="190" y="328" textAnchor="middle" fill="#92400E" fontSize="15" fontWeight="bold">OWNS</text>
      </g>
      <line x1="190" y1="170" x2="190" y2="285" stroke="#1E40AF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
      <line x1="190" y1="355" x2="190" y2="450" stroke="#1E40AF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
      <text x="165" y="210" fill="#DC2626" fontSize="16" fontWeight="bold">1</text>
      <text x="165" y="430" fill="#DC2626" fontSize="16" fontWeight="bold">N</text>

      {/* MAKES Relationship (CARD-JOURNEY) */}
      <g filter="url(#shadow)">
        <polygon points="460,485 495,520 460,555 425,520" fill="#FEF3C7" stroke="#D97706" strokeWidth="3"/>
        <text x="460" y="528" textAnchor="middle" fill="#92400E" fontSize="15" fontWeight="bold">MAKES</text>
      </g>
      <line x1="280" y1="490" x2="425" y2="520" stroke="#1E40AF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
      <line x1="495" y1="520" x2="650" y2="485" stroke="#1E40AF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
      <text x="300" y="475" fill="#DC2626" fontSize="16" fontWeight="bold">1</text>
      <text x="620" y="475" fill="#DC2626" fontSize="16" fontWeight="bold">N</text>

      {/* HAS Relationship (LINE-STATION) */}
      <g filter="url(#shadow)">
        <polygon points="950,135 985,170 950,205 915,170" fill="#FEF3C7" stroke="#D97706" strokeWidth="3"/>
        <text x="950" y="178" textAnchor="middle" fill="#92400E" fontSize="15" fontWeight="bold">HAS</text>
      </g>
      <line x1="830" y1="135" x2="915" y2="170" stroke="#1E40AF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
      <line x1="985" y1="170" x2="1100" y2="135" stroke="#1E40AF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
      <text x="850" y="120" fill="#DC2626" fontSize="16" fontWeight="bold">N</text>
      <text x="1070" y="120" fill="#DC2626" fontSize="16" fontWeight="bold">1</text>

      {/* ENTRY AT Relationship */}
      <g filter="url(#shadow)">
        <polygon points="740,290 775,325 740,360 705,325" fill="#DBEAFE" stroke="#1D4ED8" strokeWidth="3"/>
        <text x="740" y="333" textAnchor="middle" fill="#1E3A8A" fontSize="14" fontWeight="bold">ENTRY</text>
      </g>
      <line x1="740" y1="170" x2="740" y2="290" stroke="#1E40AF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
      <line x1="740" y1="360" x2="740" y2="450" stroke="#1E40AF" strokeWidth="3" markerEnd="url(#arrowhead)"/>
      <text x="760" y="210" fill="#16A34A" fontSize="16" fontWeight="bold">1</text>
      <text x="760" y="430" fill="#16A34A" fontSize="16" fontWeight="bold">N</text>

      {/* EXIT AT Relationship */}
      <g filter="url(#shadow)">
        <polygon points="640,290 675,325 640,360 605,325" fill="#DCFCE7" stroke="#15803D" strokeWidth="3"/>
        <text x="640" y="333" textAnchor="middle" fill="#14532D" fontSize="14" fontWeight="bold">EXIT</text>
      </g>
      <path d="M 700,170 Q 670,230 640,290" stroke="#1E40AF" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
      <path d="M 640,360 Q 670,410 700,450" stroke="#1E40AF" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
      <text x="660" y="210" fill="#9333EA" fontSize="16" fontWeight="bold">1</text>
      <text x="670" y="430" fill="#9333EA" fontSize="16" fontWeight="bold">N</text>

    {/* DEFINES Relationship */}
<g filter="url(#shadow)">
  <polygon points="950,214 978,242 950,270 922,242" fill="#FEF3C7" stroke="#D97706" strokeWidth="3"/>
  <text x="950" y="243" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="bold">DEFINES</text>
</g>

<path d="M 820,115 Q 870,155 920,205" stroke="#1E40AF" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>
<path d="M 985,235 Q 1040,320 1105,430" stroke="#1E40AF" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)"/>


<text x="840" y="140" fill="#DC2626" fontSize="16" fontWeight="bold">N</text>
<text x="1070" y="405" fill="#DC2626" fontSize="16" fontWeight="bold">M</text>


      {/* Legend */}
      <g transform="translate(50, 730)">
        <text x="0" y="0" fill="#1E40AF" fontSize="16" fontWeight="bold">Legend:</text>
        <rect x="0" y="10" width="60" height="30" fill="#EFF6FF" stroke="#1E40AF" strokeWidth="2" rx="3"/>
        <text x="70" y="30" fill="#333" fontSize="13">Entity</text>
        
        <ellipse cx="150" cy="25" rx="35" ry="15" fill="#DBEAFE" stroke="#1E40AF" strokeWidth="2"/>
        <text x="195" y="30" fill="#333" fontSize="13">Attribute</text>
        
        <ellipse cx="310" cy="25" rx="35" ry="15" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2"/>
        <text x="355" y="30" fill="#333" fontSize="13">Foreign Key</text>
        
        <polygon points="460,10 480,25 460,40 440,25" fill="#FEF3C7" stroke="#D97706" strokeWidth="2"/>
        <text x="490" y="30" fill="#333" fontSize="13">Relationship</text>
        
        <line x1="620" y1="25" x2="680" y2="25" stroke="#1E40AF" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="690" y="30" fill="#333" fontSize="13">Connection</text>
      </g>
        </g>
    </svg>
  </div>
</div>


        {/* Cardinality Ratios */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Cardinality Ratios</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-800">PASSENGER — OWNS — CARD</p>
              <p className="text-gray-600">1 : N (One passenger can own multiple cards)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-800">CARD — MAKES — JOURNEY</p>
              <p className="text-gray-600">1 : N (One card can make multiple journeys)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-800">STATION — ENTRY — JOURNEY</p>
              <p className="text-gray-600">1 : N (One station can be entry point for many journeys)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-800">STATION — EXIT — JOURNEY</p>
              <p className="text-gray-600">1 : N (One station can be exit point for many journeys)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-800">LINE — HAS — STATION</p>
              <p className="text-gray-600">1 : N (One line has multiple stations)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <p className="font-semibold text-gray-800">STATION — PRICED — FARE</p>
              <p className="text-gray-600">N : M (Many stations to many fare rules)</p>
            </div>
          </div>
        </div>

        {/* Database Design Explanation */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">Database Design & Structure</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg">
              <h3 className="font-bold text-lg text-blue-900 mb-2">🎫 PASSENGER Entity</h3>
              <p className="text-gray-700">Stores information about metro users including unique identification, contact details for communication and account management.</p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-5 rounded-lg">
              <h3 className="font-bold text-lg text-indigo-900 mb-2">💳 CARD Entity</h3>
              <p className="text-gray-700">Represents travel cards linked to passengers. Each card tracks balance, card type (regular/student/senior), and is used for fare deduction during journeys.</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-lg">
              <h3 className="font-bold text-lg text-purple-900 mb-2">🚉 STATION Entity</h3>
              <p className="text-gray-700">Contains details about metro stations including their location, name, and the line they belong to. Critical for route planning and journey tracking.</p>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-5 rounded-lg">
              <h3 className="font-bold text-lg text-pink-900 mb-2">🚇 LINE Entity</h3>
              <p className="text-gray-700">Represents different metro lines (e.g., Red Line, Blue Line) with unique identifiers and color codes for easy recognition in the network.</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-lg">
              <h3 className="font-bold text-lg text-green-900 mb-2">🎯 JOURNEY Entity</h3>
              <p className="text-gray-700">Records each trip made by a passenger using their card, capturing entry/exit stations and timestamps for fare calculation and analytics.</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-lg">
              <h3 className="font-bold text-lg text-yellow-900 mb-2">💰 FARE Entity</h3>
              <p className="text-gray-700">Defines pricing structure between station pairs. Enables distance-based fare calculation and supports dynamic pricing strategies.</p>
            </div>
          </div>
        </div>

        {/* Normalization */}
        <div className="mb-8 bg-green-50 p-6 rounded-xl border-2 border-green-300">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Normalization (BCNF)</h2>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-1">✓ First Normal Form (1NF)</p>
              <p className="text-gray-600 text-sm">All attributes contain atomic values. No repeating groups or multi-valued attributes exist.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-1">✓ Second Normal Form (2NF)</p>
              <p className="text-gray-600 text-sm">No partial dependencies. All non-key attributes are fully functionally dependent on the entire primary key.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-1">✓ Third Normal Form (3NF)</p>
              <p className="text-gray-600 text-sm">No transitive dependencies. All non-key attributes depend only on the primary key, not on other non-key attributes.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-800 mb-1">✓ Boyce-Codd Normal Form (BCNF)</p>
              <p className="text-gray-600 text-sm">Every determinant is a candidate key. All functional dependencies have superkeys on the left side, eliminating all anomalies.</p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <p className="text-green-900 font-semibold">Key Design Decisions:</p>
            <ul className="text-green-800 text-sm mt-2 space-y-1">
              <li>• Separated PASSENGER and CARD to allow multiple cards per passenger</li>
              <li>• STATION linked to LINE to avoid redundancy in line information</li>
              <li>• JOURNEY uses separate foreign keys for entry and exit stations for flexibility</li>
              <li>• FARE table enables dynamic pricing without modifying station data</li>
              <li>• All foreign keys maintain referential integrity and enable efficient joins</li>
            </ul>
          </div>
        </div>

        {/* System Benefits */}
        <div className="bg-indigo-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">System Benefits</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Users className="w-10 h-10 mx-auto text-indigo-600 mb-2" />
              <p className="font-semibold text-gray-800">Passenger Management</p>
              <p className="text-sm text-gray-600 mt-1">Track and manage millions of daily commuters</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <CreditCard className="w-10 h-10 mx-auto text-indigo-600 mb-2" />
              <p className="font-semibold text-gray-800">Automated Fare Collection</p>
              <p className="text-sm text-gray-600 mt-1">Real-time balance updates and fare deduction</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Train className="w-10 h-10 mx-auto text-indigo-600 mb-2" />
              <p className="font-semibold text-gray-800">Operational Analytics</p>
              <p className="text-sm text-gray-600 mt-1">Insights on usage patterns and revenue</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}