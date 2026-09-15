import React from 'react';

const PostCard = ({ title, body }) => {
  return (
    <div
      style={{
        // Set width so Flexbox knows when to wrap
        width: '300px', 
        maxWidth: '350px',
        padding: '20px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
       
      }}
    >
      <h3 style={{ marginTop: 0, color: '#0f172a' }}>{title}</h3>
      <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.5' }}>
        {body}
      </p>
      
    </div>
  );
};

export default PostCard;