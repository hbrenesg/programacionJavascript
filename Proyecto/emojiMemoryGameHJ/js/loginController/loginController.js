import { Controller } from "../controller/controller.js";
import { LoginService } from "./loginService.js";
import { LoginView } from "./loginView.js";
import { Login } from "./login.js";

export class LoginController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new LoginView(parent, this.usernameEnter.bind(this));
        this.service = new LoginService();
    }

    usernameEnter(username) {
        this.gameManager.registerUsername(username);
    }
}