'use client'
// 触发本机虚拟键盘的显示和隐藏
import { useEffect, useState } from 'react';

export default function Index() {
    const [windowVariable, setWindowVariable] = useState(false);

    useEffect(() => {
        // 在客户端执行，此时window对象可用
        let value = (window.navigator as any).virtualKeyboard ? true : false;
        setWindowVariable(value);
        console.log(value, 'value');
        
    }, []);
    
    return (
        <main>
            <h1>{windowVariable ? '支持': '不支持'} <b>virtualKeyboard</b></h1>
        </main>
  );
}
