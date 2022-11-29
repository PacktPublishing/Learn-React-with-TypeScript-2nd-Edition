import { Checklist } from './Checklist';

function App(): JSX.Element {
  return (
    <div className="p-10">
      <Checklist
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
          { id: 3, name: 'Bill', role: 'Developer' },
          { id: 4, name: 'Tara', role: 'Developer' },
          { id: 5, name: 'Sara', role: 'UX' },
          { id: 6, name: 'Derik', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
        // renderItem={(item) => (
        //   <li key={item.id} className="bg-white p-4 border-b-2">
        //     <div className="text-xl text-slate-800 pb-1">{item.name}</div>
        //     <div className="text-slate-500">{item.role}</div>
        //   </li>
        // )}
      />
    </div>
  );
}

export default App;
