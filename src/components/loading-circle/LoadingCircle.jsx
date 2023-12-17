import './loading-circle.css';

export default function LoadingCircle() {
  return (
    <div className='circle-loading-container'>
      <div className="circle-loading">
        <div className="circle-loading-spinner"></div>
      </div>
      <p>Loading posts...</p>
    </div>
  );
}
