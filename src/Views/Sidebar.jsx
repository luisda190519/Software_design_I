function Sidebar() {
    return (
        <div
            class="d-flex flex-column flex-shrink-0"
            style={{width: "4.5rem"}}
            id="sidebar"
        >
            <a
                href="/"
                class="d-block p-3 link-white text-decoration-none"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Icon-only"
            >
                <svg class="bi" width="40" height="32">
                    <use xlink:href="#bootstrap"></use>
                </svg>
                <span class="visually-hidden">Icon-only</span>
            </a>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li class="nav-item">
                    <a
                        href="#"
                        class="nav-link active py-3 border-bottom"
                        aria-current="page"
                        title=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-original-title="Home"
                    >
                        <i class="bi bi-search"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="nav-link py-3 border-bottom"
                        title=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-original-title="Dashboard"
                    >
                        <i class="bi bi-send"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="nav-link py-3 border-bottom"
                        title=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-original-title="Orders"
                    >
                        <i class="bi bi-heart"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="nav-link py-3 border-bottom"
                        title=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-original-title="Products"
                    >
                        <i class="bi bi-bell"></i>
                    </a>
                </li>
            </ul>
            <div class="dropdown border-top">
                <a
                    href="#"
                    class="d-flex align-items-center justify-content-center p-3 link-white text-decoration-none dropdown-toggle"
                    id="dropdownUser3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt="mdo"
                        width="24"
                        height="24"
                        class="rounded-circle"
                    />
                </a>
                <ul
                    class="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser3"
                >
                    <li>
                        <a class="dropdown-item" href="#">
                            New project...
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
