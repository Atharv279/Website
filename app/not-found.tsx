export default function NotFound() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          color: '#111827', 
          margin: '0 0 1rem 0',
          lineHeight: 1
        }}>
          404
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#4b5563', 
          margin: '0 0 1rem 0',
          fontWeight: '500'
        }}>
          Page Not Found
        </p>
        <p style={{ 
          color: '#6b7280',
          margin: 0,
          fontSize: '1rem'
        }}>
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
} 