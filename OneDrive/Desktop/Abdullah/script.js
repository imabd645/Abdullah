// App Configuration
const apps = {
    'contact': {
        title: 'Contact Information',
        icon: 'assets/icons/contact.png',
        content: `
            <div class="app-container">
                <div class="contact-header">
                    <h1>Contact Me</h1>
                </div>
                <div class="contact-list">
                    <a href="mailto:imabd645@gmail.com" class="contact-item">
                        <img src="assets/icons/gmail.png" width="32" height="32">
                        <div class="contact-info">
                            <h3>Email</h3>
                            <p>imabd645@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/abdullah-masood-3056a5379" target="_blank" class="contact-item">
                        <img src="assets/icons/linkedin.png" width="32" height="32">
                        <div class="contact-info">
                            <h3>LinkedIn</h3>
                            <p>Connect professionally</p>
                        </div>
                    </a>
                    <a href="https://github.com/imabd645" target="_blank" class="contact-item">
                        <img src="assets/icons/github.png" width="32" height="32">
                        <div class="contact-info">
                            <h3>GitHub</h3>
                            <p>View my code repositories</p>
                        </div>
                    </a>
                </div>
            </div>
        `
    },
    'projects': {
        title: 'My Projects',
        icon: 'assets/icons/projects.png',
        content: `
            <div class="app-container">
                <div class="projects-header">
                    <h1>Projects</h1>
                    <p>A collection of my recent work</p>
                </div>
                <div class="project-grid">
                    <div class="project-card">
                        <h3>Portfolio Website</h3>
                        <p>A Windows 11 inspired portfolio website built with HTML, CSS, and JS.</p>
                        <a href="#" class="project-link">View Project</a>
                    </div>
                    <div class="project-card">
                        <h3>EZ Language My Own Programming Language</h3>
                        <p>A C++ interpreted Language with all the functionalities which modern Languages has </p>
                        <a href="https://github.com/imabd645/EZ-language" class="project-link">View Project</a>
                    </div>
                    <div class="project-card">
                        <h3>Maze Solver and Generator</h3>
                        <p>A Random Maze Generator and Solver using BFS ,DFS ,A* </p>
                        <a href="https://github.com/imabd645/DM-Project" class="project-link">View Project</a>
                    </div>
                </div>
            </div>
        `
    },
    'edge': {
        title: 'Microsoft Edge',
        icon: 'assets/icons/edge.png',
        content: `
            <div class="app-container" style="display:flex; justify-content:center; align-items:center; height:100%; flex-direction:column; text-align:center;">
                <img src="assets/icons/google.png">
                <h2 style="margin-top:20px;">Google</h2>
                <input type="text" placeholder="Search the web" style="padding:10px 20px; width:60%; border-radius:20px; border:1px solid #ccc; margin-top:20px; color:black;">
            </div>
        `
    },
    'bin': {
        title: 'Recycle Bin',
        icon: 'assets/icons/trash.png',
        content: `
            <div class="app-container">
                <div class="projects-header">
                    <h1>Recycle Bin</h1>
                </div>
                <p style="text-align:center; margin-top:50px; color:#aaa;">This folder is empty.</p>
            </div>
        `
    },
    'this-pc': {
        title: 'This PC',
        icon: 'assets/icons/this-pc.png',
        content: `
             <div class="app-container">
                <div class="projects-header">
                    <h1>This PC</h1>
                </div>
                <div class="project-grid">
                    <div class="project-card">
                        <h3>Local Disk (C:)</h3>
                        <p>120 GB free of 500 GB</p>
                         <div style="height:10px; background:#333; border-radius:5px; overflow:hidden;">
                            <div style="width:70%; height:100%; background:#0078d4;"></div>
                         </div>
                    </div>
                </div>
            </div>
        `
    },
    'terminal': {
        title: 'Terminal',
        icon: 'assets/icons/terminal.png',
        content: `
            <div class="terminal-window" id="terminal-content">
                <div class="terminal-line">Microsoft Windows [Version 10.0.22621.1]</div>
                <div class="terminal-line">(c) Microsoft Corporation. All rights reserved.</div>
                <div class="terminal-line"><br></div>
                <div class="terminal-line">Try typing 'help' to see available commands.</div>
                <div class="terminal-line"><br></div>
                
                <div class="terminal-input-line">
                    <span class="prompt">C:\\Users\\Abdullah Masood></span>
                    <input type="text" class="cmd-input" autofocus spellcheck="false">
                </div>
            </div>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const bootScreen = document.getElementById('boot-screen');
    const bootBtn = document.getElementById('boot-btn');
    const bootLoader = document.getElementById('boot-loader');
    const desktop = document.getElementById('desktop');
    const windowArea = document.getElementById('window-area');
    const startBtn = document.getElementById('start-btn');
    const startMenu = document.getElementById('start-menu');
    const clockTime = document.getElementById('time');
    const clockDate = document.getElementById('date');
    const contextMenu = document.getElementById('context-menu');
    const calendarPanel = document.getElementById('calendar-panel');
    const clockContainer = document.querySelector('.datetime');

    let zIndexCounter = 100;

    // Boot Sequence Logic
    bootBtn.addEventListener('click', () => {
        // 1. Request Fullscreen
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }

        // 2. Start Animation
        bootBtn.style.display = 'none';
        bootLoader.classList.remove('hidden');

        // 3. Transition to Desktop
        setTimeout(() => {
            bootScreen.style.opacity = '0';
            setTimeout(() => {
                bootScreen.remove();
                desktop.classList.remove('hidden');
            }, 1000);
        }, 3000); // 3 seconds fake boot time
    });

    // Clock
    function updateClock() {
        const now = new Date();
        clockTime.textContent = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        clockDate.textContent = now.toLocaleDateString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Start Menu
    startBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startMenu.classList.toggle('active');
        calendarPanel.classList.remove('active');
        // Close context menu if open
        contextMenu.classList.add('hidden');
    });

    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && !startBtn.contains(e.target)) {
            startMenu.classList.remove('active');
        }
        if (!calendarPanel.contains(e.target) && !clockContainer.contains(e.target)) {
            calendarPanel.classList.remove('active');
        }
        // Always hide context menu on left click anywhere
        contextMenu.classList.add('hidden');
    });

    // Calendar Toggle
    clockContainer.addEventListener('click', (e) => {
        e.stopPropagation();
        calendarPanel.classList.toggle('active');
        startMenu.classList.remove('active');
    });

    // Context Menu Logic
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Simple bounds check to prevent menu going off screen
        const menuWidth = 250;
        const menuHeight = 300;

        let x = mouseX;
        let y = mouseY;

        if (x + menuWidth > window.innerWidth) x -= menuWidth;
        if (y + menuHeight > window.innerHeight) y -= menuHeight;

        contextMenu.style.top = `${y}px`;
        contextMenu.style.left = `${x}px`;
        contextMenu.classList.remove('hidden');

        startMenu.classList.remove('active');
        calendarPanel.classList.remove('active');
    });

    // Mock Refresh
    document.getElementById('refresh-btn').addEventListener('click', () => {
        desktop.style.opacity = '0.8';
        setTimeout(() => {
            desktop.style.opacity = '1';
        }, 100);
    });

    // Window Management
    function openWindow(appId) {
        if (!apps[appId]) return;

        // Check if already open
        const existingWindow = document.querySelector(`.window[data-app="${appId}"]`);
        if (existingWindow) {
            if (existingWindow.classList.contains('minimized')) {
                existingWindow.classList.remove('minimized');
                existingWindow.style.display = 'flex';
            }
            bringToFront(existingWindow);
            return;
        }

        const appConfig = apps[appId];
        const windowEl = document.createElement('div');
        windowEl.classList.add('window');
        windowEl.setAttribute('data-app', appId);

        // Randomize position slightly
        const offset = Math.floor(Math.random() * 50);
        windowEl.style.top = `${50 + offset}px`;
        windowEl.style.left = `${100 + offset}px`;

        windowEl.innerHTML = `
            <div class="title-bar">
                <div class="title-left">
                    <img src="${appConfig.icon}" alt="Icon">
                    <span>${appConfig.title}</span>
                </div>
                <div class="window-controls">
                    <div class="control-btn minimize-btn">🗕</div>
                    <div class="control-btn maximize-btn">🗖</div>
                    <div class="control-btn close-btn">✕</div>
                </div>
            </div>
            <div class="window-content">
                ${appConfig.content}
            </div>
        `;

        windowArea.appendChild(windowEl);
        bringToFront(windowEl);
        makeDraggable(windowEl);

        // Taskbar Indicator
        const taskbarIcon = document.querySelector(`.taskbar-icon[data-app="${appId}"]`);
        if (taskbarIcon) taskbarIcon.classList.add('open');

        // Terminal Specific Logic
        if (appId === 'terminal') {
            try {
                setupTerminal(windowEl);
            } catch (err) {
                console.error("Failed to setup terminal:", err);
            }
        }

        // Control Buttons
        windowEl.querySelector('.close-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            windowEl.remove();
            // Remove indicator if no other windows of this app (assuming singleton for now, so always remove)
            if (taskbarIcon) taskbarIcon.classList.remove('open');
        });

        windowEl.querySelector('.maximize-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            windowEl.classList.toggle('maximized');
        });

        windowEl.querySelector('.minimize-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            windowEl.classList.add('minimized');
            windowEl.style.display = 'none'; // Simple hide
            // In a full implementation we would animate to taskbar
        });

        // Click to focus
        windowEl.addEventListener('mousedown', () => {
            bringToFront(windowEl);
        });
    }

    // Terminal Logic
    function setupTerminal(windowEl) {
        const input = windowEl.querySelector('.cmd-input');
        const content = windowEl.querySelector('.terminal-window');

        // Focus input on click anywhere in terminal
        content.addEventListener('click', () => input.focus());

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = input.value.trim().toLowerCase();
                const originalInputLine = input.parentElement;

                // Freeze the current line logic (replace input with text)
                const frozenLine = document.createElement('div');
                frozenLine.classList.add('terminal-line');
                frozenLine.textContent = `C:\\Users\\Abdullah Masood> ${input.value}`;

                // Insert frozen line before the input line
                originalInputLine.parentNode.insertBefore(frozenLine, originalInputLine);

                // Process Command
                let response = '';
                switch (command) {
                    case 'help':
                        response = `Available commands:<br>
                        - about: View information about me<br>
                        - projects: List my projects<br>
                        - contact: Show contact details<br>
                        - cls: Clear screen<br>
                        - time: Show current time<br>
                        - exit: Close terminal`;
                        break;
                    case 'about':
                        response = "Abdullah Masood | Developer | Creative Thinker|ML & AI Enthusiast.<br>I am a Computer Science student passionate about Machine Learning and Artificial Intelligence.<br>I love building web applications that feel alive.";
                        break;
                    case 'projects':
                        response = "1. Portfolio Website<br>2. EZ My Own programming Language<br>3. A Random Maze Generator and Solver<br><br>";
                        break;
                    case 'contact':
                        response = "Email: imabd645@gmail.com<br>LinkedIn: https://www.linkedin.com/in/abdullah-masood-3056a5379";
                        break;
                    case 'cls':
                    case 'clear':
                        // Remove all previous lines (keep header?) - simple version clears mostly everything but header
                        const allLines = content.querySelectorAll('.terminal-line:not(:first-child)');
                        // Just clearing everything above input
                        // Re-render header or just clear
                        while (content.firstChild && content.firstChild !== originalInputLine) {
                            content.removeChild(content.firstChild);
                        }
                        input.value = '';
                        // Scroll to bottom
                        content.scrollTop = content.scrollHeight;
                        return; // Skip adding response
                    case 'time':
                        response = new Date().toString();
                        break;
                    case 'exit':
                        windowEl.remove();
                        const taskbarIcon = document.querySelector(`.taskbar-icon[data-app="terminal"]`);
                        if (taskbarIcon) taskbarIcon.classList.remove('open');
                        return;
                    case '':
                        response = '';
                        break;
                    default:
                        response = `'${command}' is not recognized as an internal or external command, operable program or batch file.`;
                }

                if (response) {
                    const responseDiv = document.createElement('div');
                    responseDiv.classList.add('terminal-line');
                    responseDiv.innerHTML = response;
                    originalInputLine.parentNode.insertBefore(responseDiv, originalInputLine);
                }

                input.value = '';
                // auto scroll
                content.scrollTop = content.scrollHeight;
            }
        });
    }

    function bringToFront(el) {
        zIndexCounter++;
        el.style.zIndex = zIndexCounter;
        el.classList.add('active');
        document.querySelectorAll('.window').forEach(w => {
            if (w !== el) w.classList.remove('active');
        });
    }

    function makeDraggable(el) {
        const titleBar = el.querySelector('.title-bar');
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        titleBar.addEventListener('mousedown', (e) => {
            if (e.target.closest('.control-btn')) return;

            e.preventDefault();
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialLeft = el.offsetLeft;
            initialTop = el.offsetTop;

            bringToFront(el);
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            let newTop = initialTop + dy;
            let newLeft = initialLeft + dx;

            if (newTop < 0) newTop = 0;
            el.style.left = `${newLeft}px`;
            el.style.top = `${newTop}px`;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    // App Icon Click Listeners
    // Desktop Icons
    // Desktop Icons - Support both click (responsiveness) and double click behavior
    // For web, single click opening is often preferred to avoid confusion
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const appId = icon.getAttribute('data-app');
            openWindow(appId);
        });
    });

    // Taskbar Icons
    document.querySelectorAll('.taskbar-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const appId = icon.getAttribute('data-app');
            const existingWindow = document.querySelector(`.window[data-app="${appId}"]`);

            // Toggle minimize logic
            if (existingWindow) {
                if (existingWindow.classList.contains('minimized')) {
                    existingWindow.classList.remove('minimized');
                    existingWindow.style.display = 'flex';
                    bringToFront(existingWindow);
                } else if (existingWindow.classList.contains('active')) {
                    existingWindow.classList.add('minimized');
                    existingWindow.style.display = 'none';
                } else {
                    bringToFront(existingWindow);
                }
            } else {
                openWindow(appId);
            }
        });
    });

    // Start Menu Items
    document.querySelectorAll('.app-item').forEach(item => {
        item.addEventListener('click', () => {
            const appId = item.getAttribute('data-app');
            if (appId) {
                openWindow(appId);
                startMenu.classList.remove('active'); // Close menu on launch
            }
        });
    });
});
