import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policy-viewer',
  imports: [HttpClientModule],
  templateUrl: './policy-viewer.component.html',
  styleUrl: './policy-viewer.component.scss',
})
export class PolicyViewerComponent implements OnInit {
  htmlContent: string = '';

  type: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type'); // e.g., 'privacy' or 'terms'
    console.log('Policy type:', this.type);
    console.log(this.type);

    if (this.type == 'p' || 't') {
      this.http
        .get('htmls/Document1.html', { responseType: 'text' })
        .subscribe((data) => {
          this.htmlContent = data;
        });
    }
    if (this.type == 'r') {
      this.http
        .get('htmls/Refundpolicy.html', { responseType: 'text' })
        .subscribe((data) => {
          this.htmlContent = data;
        });
    }
  }
}
