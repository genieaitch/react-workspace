import React from "react";

const PracticePropsArray2 = () => {
    return (
        <div>
            <Parent />
        </div>
    );
};

const MusicPlay = ({ songs }) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {songs.map((song, index) =>
                        song.title ? (
                    <li key={index}>
                        {song.title} - {song.artist}
                    </li>
                        ) : (
                            <li key={index}>{MusicPlay.defaultProps.title}</li>
                        ))}
            </ul>
        </div>
    );
};

// 기본 값 설정
MusicPlay.defaultProps = {
    title: "재생 목록이 없습니다.",
    artist: "미정"
};

const Tod = ({ tasks }) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {tasks.map((task, index) =>
                    task.task ? (
                        <li key={index}>
                            할 일 : {task.task} / 달성 : {task.done ? "완료" : "미완료"}
                        </li>
                    ) : (
                        <li key={index}>{Tod.defaultProps.message}</li>
                    )
                )}
            </ul>
        </div>
    );
};

// 기본 값 설정
Tod.defaultProps = {
    message: "할 일이 없습니다."
};

const TeamMembers = ({ teamMembers }) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {teamMembers.map((teamMember, index) =>
                    teamMember.name ? (
                    <li key={index}>
                        이름 : {teamMember.name} / 직업 : {teamMember.role}
                    </li>
                    ):(
                    <li key={index}>{TeamMembers.defaultProps.message}</li>
                ))}
            </ul>
        </div>
    );
};

// 기본 값 설정
TeamMembers.defaultProps = {
    message: "등록된 팀원이 없습니다."
};

const ShoppingCart = ({cartItems}) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {
                    cartItems.map((cartItem, index)=>
                        cartItem.item ? (
                        <li key={index}>{cartItem.item} {cartItem.quantity}개</li>
                        ): (
                            <li key={index}>{ShoppingCart.defaultProps.message}</li>
                        ))
                }
            </ul>
        </div>
    );
};

//기본 값 설정
ShoppingCart.defaultProps={
    message:"장바구니가 비었습니다."
}

const EventSchedule = ({events}) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {
                    events.map((event, index) =>
                        event.name?(
                            <li key={index}>행사명 : {event.name} / 날짜 : {event.date}</li>
                        ): (
                            <li key={index}>{EventSchedule.defaultProps.message}</li>
                        )
                    )
                }
            </ul>
        </div>
    );
};

EventSchedule.defaultProps={
    message:"예정된 행사가 없습니다."
}

const Parent = () => {
    const songsList = [
        { title: "Attention", artist: "Charlie Puth" },
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Dynamite", artist: "BTS" },
        { artist: "Black Pink" } // title 없음 → 기본값 출력
    ];

    const tasksList = [
        { task: "React 공부하기", done: false },
        { task: "운동하기", done: true },
        { task: "책 읽기", done: false },
        { done: false } // task 없음 → "할 일이 없습니다." 출력
    ];

    const teamMembersList = [
        { name: "김철수", role: "프론트엔드 개발자" },
        { name: "박영희", role: "백엔드 개발자" },
        { name: "이민호", role: "디자이너" },
        { role: "시스템 개발자" } // name 없음 → 기본값 출력
    ];

    const cartItemsList = [
        { item: "노트북", quantity: 1 },
        { item: "무선 마우스", quantity: 2 },
        { item: "키보드", quantity: 1 }
    ];

    const eventsList = [
        { name: "React 컨퍼런스", date: "2025-03-10" },
        { name: "개발자 밋업", date: "2025-04-22" },
        { name: "해커톤", date: "2025-05-15" }
    ];

    return (
        <div>
            <MusicPlay songs={songsList} />
            <Tod tasks={tasksList} />
            <TeamMembers teamMembers={teamMembersList} />
            <ShoppingCart cartItems={cartItemsList}/>
            <EventSchedule events={eventsList}/>
        </div>
    );
};

export default PracticePropsArray2;