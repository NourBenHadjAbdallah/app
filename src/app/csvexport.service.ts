import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CSVExportService {

  constructor() { }

  exportToCsv(data: any[], filename: string): void {
    const header = [
      'Account Number',
      'Agency',
      'Account Type',
      'Customer Currency',
      'Customer Name',
      'Customer Address',
      'Bank',
      'StatementDate',
      'OpeningBalance',
      'ClosingBalance'
    ].join(',');

    const rows = data.map(item => [
      item.AccountNumber,
      item.Agency,
      item.AccountType,
      item.AccountCurrency,
      item.CustomerName,
      item.CustomerAddress,
      item.BankNumber,
      item.StatementDate,
      item.OpeningBalance,
      item.ClosingBalance
    ].join(','));

    const csvContent = [header, ...rows].join('\n');

    this.downloadCsv(csvContent, filename);
  }

  private downloadCsv(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
