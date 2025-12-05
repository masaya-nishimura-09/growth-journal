    import type { Metadata } from 'next';

    export const metadata: Metadata = {
      title: '404 - Page Not Found',
    };

    export default function NotFoundPage() {
      return (
        <div>
          <h1>404 - Page Not Found</h1>
          <p>We could not find the page you were looking for.</p>
        </div>
      );
    }
