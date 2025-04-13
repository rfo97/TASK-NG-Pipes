import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import { CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe} from '@angular/common'
import { StatusPipe } from '../status.pipe';
import { LoginEmojiPipe } from '../login-emoji.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, StatusPipe,LoginEmojiPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() data!: User;
}
