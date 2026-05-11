import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface LeadNotifyContext {
  /** Visitor name (Web3Forms “from” context). */
  name: string;
  /** Visitor email (Web3Forms reply). */
  email: string;
}

@Injectable({ providedIn: 'root' })
export class LeadNotificationService {
  /**
   * Sends the lead to Web3Forms. Returns whether the API accepted the submission.
   */
  async submitLead(
    summary: string,
    ctx: LeadNotifyContext
  ): Promise<{ ok: boolean; error?: string }> {
    const text = summary.trim();
    if (!text) {
      return { ok: false, error: 'Please fill in all fields.' };
    }

    const accessKey = environment.leadsWeb3FormsAccessKey?.trim();
    if (!accessKey) {
      return {
        ok: false,
        error:
          'This form is not configured yet. Add your Web3Forms access key in environment settings.',
      };
    }

    const result = await this.postWeb3Forms(accessKey, text, ctx);
    if (result.success) {
      return { ok: true };
    }
    return {
      ok: false,
      error: result.message ?? 'Could not send your request. Please try again.',
    };
  }

  private async postWeb3Forms(
    accessKey: string,
    message: string,
    ctx: LeadNotifyContext
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Rig Revive — new service request',
          name: ctx.name,
          email: ctx.email,
          message,
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (res.ok && data.success === true) {
        return { success: true };
      }
      return { success: false, message: data.message };
    } catch {
      return { success: false, message: 'Network error. Check your connection and try again.' };
    }
  }
}
