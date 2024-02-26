import './Timeline.css';

function Timeline({time}) {
  return (
            <div className="timeline-container">
                <div className="time-placeholder">{time}</div>
                {/* <div className='scheduled-event'><button>Add</button></div> */}
                <div className="timeline-placeholder1">
                    <div className='timeline-placeholder'>
                        <div className="outer-dashed-line"></div>
                        <div className="inner-dashed-line"></div>
                        <div className="outer-dashed-line"></div>
                    </div>
                </div>
            </div>
  );
}

export default Timeline;