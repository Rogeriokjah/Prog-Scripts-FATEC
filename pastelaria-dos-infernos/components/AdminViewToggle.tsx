interface AdminProps {
    isAdmin: boolean;
    toggleAdmin: () => void;
  }
  
  export default function AdminViewToggle({ isAdmin, toggleAdmin }: AdminProps) {
    return (
      <button className="admin-button" onClick={toggleAdmin}>
        {isAdmin ? 'Sair da Visualização Admin' : 'Visualização Admin'}
      </button>
    );
  }