import { createApp } from 'vue';
import App from './App.vue';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiPersonFill, BiStack, IoCodeSlash, BiTelephoneFill, BiBriefcaseFill, FaShapes, HiSolidBadgeCheck, MdLanguage, ViFileTypeVue, ViFileTypeJsOfficial, ViFileTypeNuxt, ViFileTypeNode, ViFileTypePhp, ViFileTypeMysql, SiExpress, ViFileTypeSqlite, FaDumbbell, FaHeart, IoMusicalNotes, FaRecordVinyl, BiCameraFill, ViFileTypeDocker, ViFileTypeTypescriptOfficial, HiSolidMenu, MdInfo, BiStars, FaGithubSquare, FaLinkedin, MdAlternateemailRound, IoHome, MdSchoolRound, IoClose, MdArrowleftRound, MdArrowrightRound, MdArrowforwardiosRound, BiCaretLeftSquareFill, BiCaretRightSquareFill, MdWavinghandRound, MdEmailRound, FcCheckmark } from "oh-vue-icons/icons";

addIcons(BiPersonFill, BiStack, IoCodeSlash, BiTelephoneFill, BiBriefcaseFill, FaShapes, HiSolidBadgeCheck, MdLanguage, ViFileTypeVue, ViFileTypeJsOfficial, ViFileTypeNuxt, ViFileTypeNode, ViFileTypePhp, ViFileTypeDocker, ViFileTypeMysql, SiExpress, ViFileTypeSqlite, FaDumbbell, FaHeart, IoMusicalNotes, FaRecordVinyl, BiCameraFill, ViFileTypeTypescriptOfficial, HiSolidMenu, MdInfo, BiStars, FaGithubSquare, FaLinkedin, MdAlternateemailRound, IoHome, MdSchoolRound, IoClose, MdArrowleftRound, MdArrowrightRound, MdArrowforwardiosRound, BiCaretLeftSquareFill, BiCaretRightSquareFill, MdWavinghandRound, MdEmailRound, FcCheckmark);


const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
