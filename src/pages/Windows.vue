<!-- src/pages/windows.vue -->
<template>
  <div class="Waitlist_hero__zmOuQ">
    <div class="Waitlist_text__T2GAp">
      <h1>Paxxim for Windows</h1>
      <p>Join the waitlist to get notified when Paxxim is available for Windows.</p>
      <form class="Waitlist_signupForm__nUoeU" @submit.prevent="handleSubmit">
        <div class="Input_outerWrapper__0nCNU">
          <input
            v-model="email"
            placeholder="Email address…"
            required
            data-1p-ignore="true"
            type="email"
            class="Input_input__trG8n"
            name="email"
          />
        </div>
        <button
          type="submit"
          class="Button_button__JJiqJ Button_light__KdYEB"
          aria-disabled="false"
        >
          Join waitlist
        </button>
      </form>
    </div>
    <div style="position:relative">
      <div class="Waitlist_graphic__QVrXt">
        <img
          alt="Windows waitlist logo"
          loading="lazy"
          decoding="async"
          data-1p-ignore="true"
          src="@/assets/images/windows_waitlist.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

function handleSubmit() {
  alert(`Thanks! We’ll notify you at ${email.value}`)
  email.value = ''
}
</script>

<style scoped>
.RadioGroup_vertical__xbH1I {
    display: flex;
    flex-direction: column;
    gap: 8px
}

.RadioGroup_horizontal__X9Q0i {
    display: flex;
    flex-direction: row;
    gap: 24px
}

.RadioGroup_RadioGroupItemContainer__BFz_g {
    display: flex;
    gap: 8px;
    align-items: center
}

button.RadioGroup_RadioGroupItem__qdZRf {
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    font-size: 0;
    border: 1px solid hsla(0,0%,100%,.2);
    border-radius: 100%;
    transition: background-color .2s
}

button.RadioGroup_RadioGroupItem__qdZRf:hover {
    background-color: hsla(0,0%,100%,.05)
}

button.RadioGroup_RadioGroupItem__qdZRf:focus {
    box-shadow: 0 0 0 2px hsla(0,0%,100%,.4)
}

[data-with-error=true] button.RadioGroup_RadioGroupItem__qdZRf {
    outline: 1px solid rgba(255,99,99,.6)
}

.RadioGroup_RadioGroupIndicator__wRRH4 {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%
}

.RadioGroup_RadioGroupIndicator__wRRH4:after {
    display: block;
    width: 4px;
    height: 4px;
    content: "";
    background-color: #fff;
    border-radius: 50%
}

.RadioGroup_Label__oxuTt {
    display: flex;
    align-items: center;
    padding: 6px 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    color: #fff;
    letter-spacing: .1px
}

.Checkbox_input__VCftU {
    position: absolute;
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0
}

.Checkbox_checkbox__b4eA_ {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border: 1px solid hsla(0,0%,100%,.2);
    border-radius: 5px
}

.Checkbox_checkbox__b4eA_>svg {
    opacity: 0;
    transition: opacity .2s ease-in-out
}

input:checked~.Checkbox_checkbox__b4eA_>svg {
    opacity: 1
}

.Dialog_DialogOverlay___JKuC {
    position: fixed;
    inset: 0;
    z-index: 105;
    display: grid;
    place-items: center;
    padding: var(--spacing-2);
    overflow-x: auto;
    overflow-y: auto;
    background: rgba(0,0,0,.3);
    animation: Dialog_overlayShow__aoscm .15s cubic-bezier(.16,1,.3,1)
}

.Dialog_DialogContent__iT41v {
    z-index: 110;
    display: flex;
    flex-direction: column;
    width: 450px;
    max-width: 500px;
    padding: 24px;
    background: #07080a;
    border: 1px solid hsla(0,0%,100%,.2);
    border-radius: 12px;
    animation: Dialog_contentShow__1P_gC .15s cubic-bezier(.16,1,.3,1)
}

.Dialog_DialogContent__iT41v:focus {
    outline: none
}

.Dialog_DialogTitle__xbMhW {
    margin: 0 0 8px;
    font-weight: 500;
    color: #fff
}

.Dialog_DialogDescription__wCZHd,.Dialog_DialogTitle__xbMhW {
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    letter-spacing: .1px
}

.Dialog_DialogDescription__wCZHd {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 400;
    color: hsla(0,0%,100%,.6)
}

@keyframes Dialog_overlayShow__aoscm {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes Dialog_contentShow__1P_gC {
    0% {
        opacity: 0;
        transform: translateY(-2%) scale(.96)
    }

    to {
        opacity: 1;
        transform: translate(0) scale(1)
    }
}

@keyframes WaitlistForm_shimmer__THNNy {
    0% {
        background-position: -8rem top
    }

    70% {
        background-position: var(--shimmer-offset) top
    }

    to {
        background-position: var(--shimmer-offset) top
    }
}

.WaitlistForm_trigger__hWN0l {
    --shimmer-offset: 20rem;
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    background: linear-gradient(to left,var(--color-red),hsla(0,0%,100%,.7) 50%,var(--color-red));
    background-color: var(--color-red);
    background-repeat: no-repeat;
    background-position: -8rem top;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 8rem 100%;
    animation: WaitlistForm_shimmer__THNNy 2.2s linear .8s infinite;
    -webkit-text-fill-color: transparent
}

@media (min-width: 720px) {
    .WaitlistForm_trigger__hWN0l {
        --shimmer-offset:32rem;
        font-size: 18px;
        white-space: nowrap
    }
}

.WaitlistForm_optional__kAGlr {
    display: none
}

@media (min-width: 720px) {
    .WaitlistForm_optional__kAGlr {
        display:inline
    }
}

.WaitlistForm_arrow__It_OE {
    --fill: var(--color-red);
    display: flex;
    align-items: center
}

.WaitlistForm_arrow__It_OE svg {
    --initial-delay: 2s;
    width: 18px;
    animation: WaitlistForm_floatX__Sbo_m 2.2s cubic-bezier(.2,0,.35,.8) var(--initial-delay) infinite
}

.WaitlistForm_arrow__It_OE svg:last-of-type {
    margin-left: -10px;
    animation-delay: calc(var(--initial-delay) + .125s)
}

.WaitlistForm_arrow__It_OE svg path {
    stroke: var(--fill);
    transition: stroke .2s
}

@keyframes WaitlistForm_floatX__Sbo_m {
    0% {
        transform: translateX(0);
        --fill: #ffb3b3
    }

    12% {
        transform: translateX(3px);
        --fill: #ffb3b3
    }

    24.14% {
        transform: translateX(0);
        --fill: #ffb3b3
    }

    40% {
        transform: translateX(0);
        --fill: var(--color-red)
    }

    to {
        transform: translateX(0);
        --fill: var(--color-red)
    }
}

.WaitlistForm_form__dqvjw h3 {
    margin-bottom: 12px
}

.WaitlistForm_form__dqvjw p {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    color: var(--grey-200);
    letter-spacing: .2px
}

.WaitlistForm_form__dqvjw a {
    color: #fff;
    text-decoration: underline
}

.WaitlistForm_form__dqvjw input {
    font-size: 16px!important
}

@media (min-width: 720px) {
    .WaitlistForm_form__dqvjw input {
        font-size:14px!important
    }
}

p.WaitlistForm_formHeader__uZKEU {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 600;
    color: #fff
}

.WaitlistForm_Fieldset__Js4gM {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    border: none
}

.WaitlistForm_checkbox__Dp_W_ {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 6px 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    color: #fff;
    letter-spacing: .1px
}

.WaitlistForm_checkbox__Dp_W_ input {
    position: absolute;
    pointer-events: none;
    opacity: 0;
    transform: translateX(-100%)
}

.WaitlistForm_checkbox__Dp_W_ input:focus+div {
    background-color: hsla(0,0%,100%,.05);
    box-shadow: 0 0 0 2px hsla(0,0%,100%,.4)
}

.WaitlistForm_Label__J1rE_ {
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    color: hsla(0,0%,100%,.6);
    letter-spacing: .1px
}

div.WaitlistForm_dialogContent__GnEMM {
    max-width: calc(100vw - (var(--spacing-2) * 2))
}

.WaitlistForm_footer__ftDf4 {
    padding: 12px 16px 0;
    margin: 0 -24px -12px;
    border-top: 1px solid hsla(0,0%,100%,.2)
}

.WaitlistForm_buttons__wYI6Y {
    display: flex;
    flex-direction: row-reverse;
    gap: 16px;
    justify-content: flex-start
}

.WaitlistForm_grid__wNYVR {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 8px
}

.WaitlistForm_error__4K0FZ {
    margin-top: 12px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500
}

@property --translateX {
    syntax: "<length-percentage>";
    inherits: false;
    initial-value: -8%
}

.Waitlist_hero__zmOuQ {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    grid-template-columns: 1fr;
    align-items: center;
    max-width: 100%;
    padding-bottom: 250px;
    margin: 75px auto 0;
    overflow: hidden
}

@media (min-width: 720px) {
    .Waitlist_hero__zmOuQ {
        display:grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        max-width: calc(var(--container-width) + var(--spacing-6));
        min-height: 100vh;
        padding: var(--spacing-13) var(--spacing-3);
        margin-top: 24px
    }
}

.Waitlist_graphic__QVrXt {
    position: relative;
    z-index: -1;
    width: clamp(600px,100vw,750px);
    max-width: none;
    margin-top: var(--spacing-2)
}

@media (min-width: 720px) {
    .Waitlist_graphic__QVrXt {
        position:absolute;
        top: 50%;
        left: 45%;
        transform: translate(-50%,-50%)
    }
}

.Waitlist_graphic__QVrXt img:first-child {
    transform: translateY(5%);
    animation: Waitlist_fadeIn__VEL4_ 3s ease-out forwards
}

.Waitlist_graphic__QVrXt img+img {
    position: absolute;
    top: 0;
    left: 50%;
    width: clamp(250px,50vw,300px);
    height: auto;
    opacity: 1;
    transform: translateX(-50%);
    animation: Waitlist_slideIn__w5E3Z 3s ease-out 0s forwards
}

@keyframes Waitlist_slideIn__w5E3Z {
    0% {
        opacity: 0;
        transform: translateX(-50%) scale(1.03)
    }

    to {
        opacity: 1;
        transform: translateX(-50%) scale(1)
    }
}

@keyframes Waitlist_fadeIn__VEL4_ {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.Waitlist_text__T2GAp {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
    align-items: flex-start;
    max-width: calc(520px + var(--spacing-4));
    min-height: 298px;
    padding: 0 var(--spacing-2)
}

@media (min-width: 720px) {
    .Waitlist_text__T2GAp {
        height:298px;
        min-height: 0
    }
}

@media (min-width: 1120px) {
    .Waitlist_text__T2GAp {
        height:200px
    }
}

.Waitlist_text__T2GAp h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    font-feature-settings: "ss08" on,"ss02" on,"liga" off;
    line-height: normal;
    text-align: left;
    text-shadow: 0 4px 4px rgba(0,0,0,.15);
    background: linear-gradient(90deg,hsla(0,0%,100%,.8) -1.59%,#fff 49.71%,hsla(0,0%,100%,.81));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent
}

@media (min-width: 720px) {
    .Waitlist_text__T2GAp h1 {
        font-size:48px
    }
}

.Waitlist_text__T2GAp p {
    margin-bottom: var(--spacing-2);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5;
    color: var(--Text-Loud,var(--Base-White,#fff));
    text-align: left;
    text-shadow: 0 1px 4px rgba(0,0,0,.75);
    letter-spacing: .2px
}

@media (min-width: 720px) {
    .Waitlist_text__T2GAp p {
        font-size:18px
    }
}

.Waitlist_proBadge__lCMw_ {
    position: relative;
    display: flex;
    gap: var(--spacing-0-5);
    align-items: center;
    justify-content: center;
    height: 34px;
    padding: 6px var(--spacing-1-5) 6px 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: #aae1ff;
    text-align: center;
    letter-spacing: .2px;
    background-image: linear-gradient(var(--grey-900),var(--grey-900)),linear-gradient(150deg,hsla(0,0%,100%,.23),hsla(0,0%,100%,.07));
    background-clip: padding-box,border-box;
    background-origin: border-box;
    border: 1px solid transparent;
    border-radius: var(--rounding-lg);
    box-shadow: inset 0 1px 1px 0 hsla(0,0%,100%,.25)
}

.Waitlist_formWrapper__e84Hu {
    width: 100%;
    max-width: 520px
}

.Waitlist_signupForm__nUoeU {
    position: relative;
    display: flex;
    gap: var(--spacing-2);
    width: 100%
}

.Waitlist_signupForm__nUoeU>div {
    width: 100%
}

.Waitlist_signupForm__nUoeU>div input {
    font-size: 16px!important
}

@media (min-width: 720px) {
    .Waitlist_signupForm__nUoeU>div input {
        font-size:14px!important
    }
}

p.Waitlist_error__U8dlb {
    position: absolute;
    top: 140%;
    left: 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 500
}

.ExtensionIssuesForm_label___XgJD {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-start;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    color: hsla(0,0%,100%,.6)
}

.Tooltip_TooltipContent__klREN {
    max-width: min(100vw,300px);
    max-height: calc(100vh - 100px);
    padding: var(--spacing-3);
    overflow-y: auto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    color: var(--Text-Default,var(--grey-200));
    letter-spacing: .2px;
    background: var(--Card-BG,linear-gradient(137deg,#111214 4.87%,#0c0d0f 75.88%));
    border: 1px solid var(--Card-Border,hsla(0,0%,100%,.06));
    border-radius: var(--rounding-md);
    box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,.1);
    animation-duration: .4s;
    animation-timing-function: cubic-bezier(.16,1,.3,1);
    will-change: transform,opacity
}

.Tooltip_TooltipContent__klREN[data-state=delayed-open][data-side=top] {
    animation-name: Tooltip_slideDownAndFade__aEKOh
}

.Tooltip_TooltipContent__klREN[data-state=delayed-open][data-side=right] {
    animation-name: Tooltip_slideLeftAndFade__dFqpM
}

.Tooltip_TooltipContent__klREN[data-state=delayed-open][data-side=bottom] {
    animation-name: Tooltip_slideUpAndFade__BbhHY
}

.Tooltip_TooltipContent__klREN[data-state=delayed-open][data-side=left] {
    animation-name: Tooltip_slideRightAndFade__mCrmK
}

@keyframes Tooltip_slideUpAndFade__BbhHY {
    0% {
        opacity: 0;
        transform: translateY(2px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes Tooltip_slideRightAndFade__mCrmK {
    0% {
        opacity: 0;
        transform: translateX(-2px)
    }

    to {
        opacity: 1;
        transform: translateX(0)
    }
}

@keyframes Tooltip_slideDownAndFade__aEKOh {
    0% {
        opacity: 0;
        transform: translateY(-2px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

@keyframes Tooltip_slideLeftAndFade__dFqpM {
    0% {
        opacity: 0;
        transform: translateX(2px)
    }

    to {
        opacity: 1;
        transform: translateX(0)
    }
}

.OwnerDetails_avatarAndName__M9xi3 {
    display: grid;
    grid-template-columns: 64px auto;
    gap: 16px;
    padding-top: 24px
}

@media (min-width: 1064px) {
    .OwnerDetails_avatarAndName__M9xi3 {
        grid-template-columns:repeat(1,minmax(0,1fr));
        gap: 24px;
        padding-top: 0
    }
}

.OwnerDetails_nameAndHandle__cJ1tZ {
    display: flex;
    flex-direction: column;
    gap: 8px
}

.OwnerDetails_nameAndHandle__cJ1tZ>h2 {
    overflow: hidden;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: #fff;
    text-overflow: ellipsis
}

.OwnerDetails_handle__LWp6b {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
    align-items: center;
    color: hsla(0,0%,100%,.6)
}

.OwnerDetails_handle__LWp6b>h3 {
    overflow: hidden;
    font-family: var(--monospace-font);
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    text-overflow: ellipsis;
    white-space: nowrap
}

.OwnerDetails_handle__LWp6b>span {
    display: inline-flex;
    align-items: center
}

.OwnerDetails_enter__yXD2j {
    opacity: 0
}

.OwnerDetails_enterActive__kj1BX {
    opacity: 1;
    transition: opacity .2s
}

.OwnerDetails_exit__Tgbdm {
    opacity: 1
}

.OwnerDetails_exitActive__ctEsn {
    opacity: 0;
    transition: opacity .2s
}

.JoinDate_joinDate__sPey8 {
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    color: hsla(0,0%,100%,.4)
}

.Sidebar_sidebar__rp5qh {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: flex-start;
    color: hsla(0,0%,100%,.6)
}

.Sidebar_sidebar__rp5qh strong {
    font-size: 12px;
    font-weight: 500
}

.Sidebar_sidebar__rp5qh hr {
    margin: 8px 0;
    border-color: hsla(0,0%,100%,.1)
}

@media (min-width: 1064px) {
    .Main_main__F_Fvw {
        padding-top:calc(224px + 24px)
    }
}

.SocialLinks_list__RG__F {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: hsla(0,0%,100%,.6)
}

.SocialLinks_list__RG__F a {
    transition: color .2s
}

.SocialLinks_list__RG__F a:hover {
    color: #fff
}

.SocialLinks_list__RG__F>li {
    display: flex;
    gap: 8px;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis
}

.SocialLinks_list__RG__F>li>svg {
    height: 16px;
    color: hsla(0,0%,100%,.4)
}

.SocialLinks_list__RG__F>li:not(:last-child) {
    margin-bottom: 8px
}

.UserProfile_mainInfo__OoDCm {
    display: flex;
    flex-direction: column;
    gap: 16px
}

.UserProfile_mainInfo__OoDCm .UserProfile_bio__RdBlH {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%
}

.UserProfile_mainInfo__OoDCm .UserProfile_bio__RdBlH>p {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word
}

.UserProfile_editButton__dhxND {
    padding: 8px 16px
}

.Commands_commands__JgGYN {
    position: relative
}

.Commands_commandsTitle__YPzSS {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(var(--font-color-rgb),.6)
}

.Commands_commandsCounter__pnPzE {
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 600;
    line-height: 12px;
    color: rgba(var(--font-color-rgb),1);
    background-color: rgba(var(--lines-color-rgb),.2);
    border-radius: 9999px
}

.Commands_command__D1KsJ {
    padding: 16px 0;
    font-size: 14px;
    line-height: 21px;
    border-top: 1px solid rgba(var(--lines-color-rgb),.1)
}

.Commands_command__D1KsJ:first-child {
    border-top: none
}

.Commands_commandHeader__RGvUh {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
    font-weight: 500;
    color: rgba(var(--font-color-rgb),1)
}

.Commands_commandDescription__3XY11 {
    display: -webkit-box;
    overflow: hidden;
    font-size: 13px;
    color: rgba(var(--font-color-rgb),.6);
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1
}

.Commands_disabledByDefault__Me81n {
    position: absolute;
    right: 0;
    font-size: 13px;
    font-weight: 300;
    color: rgba(var(--font-color-rgb),.4)
}

.Commands_disabledByDefaultTooltip__0a_Jv {
    padding: var(--spacing-0-5);
    font-size: 13px;
    font-weight: 300;
    text-align: center
}

.ExtensionEmptyScreen_extensionEmptyScreen__AsjE_ {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 100px 0
}

.ExtensionEmptyScreen_icon__W7e4k {
    color: rgba(var(--font-color-rgb),.6)
}

.ExtensionEmptyScreen_icon__W7e4k svg {
    width: 24px;
    height: 24px
}

.ExtensionEmptyScreen_message__fRdS5 {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: rgba(var(--font-color-rgb),.6);
    text-align: center
}

.Changelog_changelogTitle__SWd9u {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 24px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: rgba(var(--font-color-rgb),.6)
}

.Changelog_changelogCounter__Fxvss {
    padding: 2px 8px;
    font-size: 10px;
    font-weight: 600;
    line-height: 12px;
    color: rgba(var(--font-color-rgb),1);
    background-color: rgba(var(--lines-color-rgb),.2);
    border-radius: 9999px
}

.Changelog_versionsWrapper__sBAbs {
    display: grid;
    grid-template-columns: 20px auto;
    gap: 16px;
    margin-bottom: 48px
}

.Changelog_version__TcfQC {
    display: contents;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 21px
}

.Changelog_version__TcfQC h1,.Changelog_version__TcfQC h2,.Changelog_version__TcfQC h3 {
    margin-bottom: 16px
}

.Changelog_version__TcfQC ul {
    color: rgba(var(--font-color-rgb),.6)
}

.Changelog_version__TcfQC li {
    padding-left: 6px;
    margin: 4px 0;
    line-height: 24px;
    list-style-type: disc
}

.Changelog_versionIcon__yk4sh {
    display: grid;
    grid-template-rows: 20px auto;
    gap: 8px;
    font-size: 20px;
    color: rgba(var(--font-color-rgb),.6)
}

.Changelog_versionBorderWrapper__GaWsL {
    display: flex;
    justify-content: center
}

.Changelog_versionBorder__30oOq {
    width: 0;
    height: 100%;
    border-left: 1px solid rgba(var(--lines-color-rgb),.1)
}
</style>
