<template>
  <div
    :class="['Navbar_container__x_wnu', { Navbar_menuOpened___q5q3: menuOpen }]"
    id="navbar"
    >
    <div class="Navbar_navbar__XlgWY">
      <div class="Navbar_logoContainer__enocR">
        <router-link to="/">
          <!-- mark: your two SVGs for compact + full logo -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" class="Navbar_logo__ycYQk">
            <path fill="#FF6363" fill-rule="evenodd" d="M12 30.99V36L-.01 23.99l2.516-2.499zM17.01 36H12l12.011 12.01 2.506-2.505zm28.487-9.497L48 24 24 0l-2.503 2.503L30.98 12h-5.732l-6.62-6.614-2.506 2.503 4.122 4.122h-2.869v18.625H36V27.77l4.122 4.122 2.503-2.506L36 22.747v-5.732zM13.253 10.747l-2.503 2.506 2.686 2.686 2.503-2.506zm21.314 21.314-2.495 2.503 2.686 2.686 2.506-2.503zM7.878 16.121l-2.503 2.504L12 25.253v-5.012zM27.756 36h-5.009l6.628 6.625 2.503-2.503z" clip-rule="evenodd"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 93 24" class="Navbar_logoFull__sb4tB">
            <!-- …full-logo path data… -->
          </svg>
        </router-link>
        <button class="Navbar_navToggle__skv0c" @click="toggleMenu">
          <span class="Navbar_navToggleLine__wBYSL"></span>
          <span class="Navbar_navToggleLine__wBYSL"></span>
          <span class="Navbar_navToggleLine__wBYSL"></span>
        </button>
      </div>

      <nav class="Navbar_navigation__sNAXS">
        <router-link class="NavLink_navLink__REP72" to="/core-features/ai">AI</router-link>
        <router-link class="NavLink_navLink__REP72" to="/ios">iOS</router-link>
        <router-link class="NavLink_navLink__REP72" to="/landlords">Landlords</router-link>
        <router-link class="NavLink_navLink__REP72" to="/tenants">Tenants</router-link>
        <router-link class="NavLink_navLink__REP72" to="/changelog">Changelog</router-link>
        <router-link class="NavLink_navLink__REP72" to="/blog">Blog</router-link>
        <router-link class="NavLink_navLink__REP72" to="/pricing">Pricing</router-link>
      </nav>

      <div class="Navbar_secondary__UAPPh">
        <div class="Navbar_signedOutWide__P7f_w">
          <a class="NavLink_navLink__REP72" href="https://app.paxxim.com">Log in</a>
          <a
            href="/download"
            class="Button_button__JJiqJ Button_light__KdYEB Navbar_downloadButton__yQ3j6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
              <path fill="currentColor" d="M12.665 15.358c..." />
            </svg>
            Download
          </a>
        </div>
        <div class="Navbar_signedOutMedium__sdlYf">
          <a
            class="Button_button__JJiqJ Button_light__KdYEB"
            href="https://app.paxxim.com"
          >
            Log in
        </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return { menuOpen: false }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>
.Navbar_container__x_wnu {
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 2;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: var(--spacing-2) calc(var(--spacing-2) + var(--removed-body-scroll-bar-size)) 0 var(--spacing-2);
    overscroll-behavior: contain;
    transform: translateX(-50%)
}

.Navbar_container__x_wnu.Navbar_menuOpened___q5q3 {
    min-height: 100vh;
    max-height: 100vh;
    padding-bottom: var(--spacing-3);
    overflow-y: scroll
}

.Navbar_navbar__XlgWY {
    display: grid;
    grid-template-rows: 24px auto;
    grid-template-columns: 1fr;
    justify-content: center;
    width: 100%;
    max-width: var(--container-width);
    height: var(--navbar-height);
    padding: var(--spacing-2);
    overflow: hidden;
    background: linear-gradient(137deg,rgba(17,18,20,.75) 4.87%,rgba(12,13,15,.9) 75.88%);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border: 1px solid var(--Card-Border,hsla(0,0%,100%,.06));
    border-radius: var(--rounding-lg);
    box-shadow: inset 0 1px 1px 0 hsla(0,0%,100%,.15);
    transition: height .3s ease,transform .3s ease;
    transform: translateZ(0);
    will-change: height,transform
}

.Navbar_logoContainer__enocR {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%
}

.Navbar_logoContainer__enocR>a {
    display: contents
}

.Navbar_logoContainer__enocR .Navbar_logo__ycYQk {
    display: none
}

.Navbar_logoContainer__enocR .Navbar_logoFull__sb4tB,.Navbar_logoContainer__enocR .Navbar_logo__ycYQk {
    height: 24px;
    transition: transform .2s ease
}

.Navbar_logoContainer__enocR .Navbar_logoFull__sb4tB:focus,.Navbar_logoContainer__enocR .Navbar_logoFull__sb4tB:hover,.Navbar_logoContainer__enocR .Navbar_logo__ycYQk:focus,.Navbar_logoContainer__enocR .Navbar_logo__ycYQk:hover {
    transform: scale(1.05)
}

.Navbar_navToggle__skv0c {
    position: relative;
    width: 24px;
    height: 16px;
    cursor: pointer;
    transition: transform .5s ease,opacity .3s ease;
    transform: translateY(0) rotate(0deg);
    will-change: transform
}

.Navbar_menuOpened___q5q3 .Navbar_navToggle__skv0c {
    transform: translateY(0) rotate(180deg)
}

.Navbar_menuOpened___q5q3 .Navbar_navToggle__skv0c .Navbar_navToggleLine__wBYSL:first-child {
    top: 50%;
    transform: translate(-50%) rotate(-45deg)
}

.Navbar_menuOpened___q5q3 .Navbar_navToggle__skv0c .Navbar_navToggleLine__wBYSL:nth-child(2) {
    top: 50%;
    opacity: 0;
    transform: translate(-50%)
}

.Navbar_menuOpened___q5q3 .Navbar_navToggle__skv0c .Navbar_navToggleLine__wBYSL:nth-child(3) {
    top: 50%;
    transform: translate(-50%) rotate(45deg)
}

.Navbar_navToggleLine__wBYSL {
    position: absolute;
    left: 50%;
    width: 100%;
    height: 1px;
    background: hsla(0,0%,100%,.9);
    transition: transform .5s,opacity .25s;
    transform: translate(-50%,-50%);
    will-change: normal
}

.Navbar_navToggleLine__wBYSL:first-child {
    top: 10%
}

.Navbar_navToggleLine__wBYSL:nth-child(2) {
    top: 50%
}

.Navbar_navToggleLine__wBYSL:nth-child(3) {
    top: 90%
}

.Navbar_navigation__sNAXS {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0-5);
    padding: var(--spacing-6) 0 var(--spacing-4)
}

.Navbar_secondary__UAPPh {
    display: flex;
    padding-top: var(--spacing-4);
    border-top: 1px solid hsla(0,0%,100%,.1)
}

.Navbar_signedOutWide__P7f_w {
    display: flex
}

.Navbar_signedOutWide__P7f_w .Navbar_downloadButton__yQ3j6 {
    display: none
}

.Navbar_signedOutMedium__sdlYf {
    display: none;
    align-items: center
}

.Navbar_logOutLink__cBO5V {
    color: #ff6363
}

.Navbar_logOutLink__cBO5V:hover {
    color: #f28c8c
}

.Navbar_signedInMenuContainer__b8kqU {
    flex-grow: 1
}

.Navbar_signedInAction__LMhGM {
    display: none
}

.Navbar_signedInMenu__r14qn {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0-5)
}

@media (min-width: 880px) {
    .Navbar_navbar__XlgWY {
        display:flex;
        padding: var(--spacing-2) var(--spacing-4);
        overflow: visible
    }

    .Navbar_logoContainer__enocR {
        position: absolute;
        top: 50%;
        left: var(--spacing-4);
        justify-content: center;
        width: auto;
        transform: translateY(-50%)
    }

    .Navbar_logoContainer__enocR .Navbar_logo__ycYQk {
        display: block
    }

    .Navbar_logoContainer__enocR .Navbar_logoFull__sb4tB,.Navbar_navToggle__skv0c {
        display: none
    }

    .Navbar_navigation__sNAXS {
        flex-direction: row;
        gap: var(--spacing-2);
        align-items: center;
        padding: 0
    }

    .Navbar_secondary__UAPPh {
        position: absolute;
        top: 50%;
        right: var(--spacing-4);
        display: grid;
        align-items: center;
        height: 100%;
        padding: 0;
        border-top: none;
        transform: translateY(-50%)
    }

    .Navbar_secondary__UAPPh.Navbar_loading__Qz_aU {
        visibility: hidden
    }

    .Navbar_signedOutWide__P7f_w {
        display: none
    }

    .Navbar_signedOutMedium__sdlYf {
        display: flex
    }

    @keyframes Navbar_slideIn__6YfDM {
        0% {
            opacity: 0;
            transform: translateY(-3%)
        }

        to {
            opacity: 1;
            transform: translateY(0)
        }
    }

    .Navbar_signedInMenuContainer__b8kqU {
        position: relative
    }

    .Navbar_signedInMenuContainer__b8kqU:hover .Navbar_signedInMenu__r14qn {
        display: flex;
        animation: Navbar_slideIn__6YfDM .3s ease forwards
    }

    .Navbar_signedInAction__LMhGM {
        display: flex;
        gap: var(--spacing-1);
        align-items: center;
        padding: var(--spacing-1) 0;
        cursor: pointer
    }

    .Navbar_signedInAction__LMhGM>svg {
        width: 20px;
        height: 20px;
        color: var(--grey-400)
    }

    .Navbar_signedInMenu__r14qn {
        position: absolute;
        top: 100%;
        right: -10px;
        display: none;
        gap: 0;
        min-width: 140px;
        padding: 0;
        overflow: hidden;
        background: linear-gradient(137deg,rgba(17,18,20,.75) 4.87%,rgba(12,13,15,.9) 75.88%);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        border: 1px solid var(--Card-Border,hsla(0,0%,100%,.06));
        border-radius: var(--rounding-sm);
        box-shadow: inset 0 1px 1px 0 hsla(0,0%,100%,.15);
        opacity: 0;
        transition: opacity .3s ease,transform .3s ease;
        transform: translateZ(0)
    }

    .Navbar_signedInMenu__r14qn>* {
        padding: var(--spacing-2)
    }

    .Navbar_signedInMenu__r14qn>:not(:last-child) {
        border-bottom: 1px solid var(--grey-600)
    }
}

@media (min-width: 1064px) {
    .Navbar_logoContainer__enocR .Navbar_logoFull__sb4tB {
        display:block
    }

    .Navbar_logoContainer__enocR .Navbar_logo__ycYQk {
        display: none
    }

    .Navbar_signedOutWide__P7f_w {
        display: flex;
        gap: var(--spacing-3);
        align-items: center
    }

    .Navbar_signedOutWide__P7f_w>.Navbar_downloadButton__yQ3j6 {
        display: flex
    }

    .Navbar_signedOutMedium__sdlYf {
        display: none
    }
}</style>
