/* ===
Header
=== */
class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <div class="container">
      <a href="index.html" class="logo">
        <div class="image">
          <img src="./icons/top-logo.png" alt="" />
        </div>
        <h2>Foody</h2>
      </a>
      <nav>
        <i class="fa-solid fa-bars bar"></i>
        <ul>
          <form action="" class="search-box">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              class="search-input"
              placeholder="search request ..."
            />
          </form>
          <li>
            <a href="#">
              <img
                src="./icons/nav-icon/house.png"
                alt="house"
                class="nav-icon"
              />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="./icons/nav-icon/open-book.png"
                alt=""
                class="nav-icon"
              />
              Courses
            </a>
          </li>
          <li>
            <a href="#"
              ><img src="./icons/serving.png" alt="" class="nav-icon" />
              Cooks<i class="fa-solid fa-caret-down"></i
            ></a>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="./icons/type-icon/chicken.png"
                    alt="chicken"
                    class="nav-icon"
                  />
                  Chicken
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="./icons/type-icon/meat.png"
                    alt=""
                    class="nav-icon"
                  />
                  Meat
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="./icons/type-icon/veg.png"
                    alt=""
                    class="nav-icon"
                  />
                  Veg
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="./icons/type-icon/salad.png"
                    alt=""
                    class="nav-icon"
                  />
                  salad
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="./icons/type-icon/sweets.png"
                    alt=""
                    class="nav-icon"
                  />
                  Sweets
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="member">
        <div class="image">
          <img src="./icons/header-icon/man.svg" alt="" />
        </div>
        <div class="member-nav">
          <i class="fa-solid fa-caret-down"></i>
          <ul>
            <li><a href="member-page.html">My accont</a></li>
            <li><a href="#">My Blogs</a></li>
            <li>
              <a href="#"
                >Log Out<i
                  class="fa-solid fa-arrow-right-to-bracket log-out"
                ></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
    `;
  }
}
customElements.define("main-header", myHeader);

// Start Footer //
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    `;
  }
}
customElements.define("main-footer", myFooter);
