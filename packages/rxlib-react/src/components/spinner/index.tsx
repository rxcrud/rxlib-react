import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/rxlib.css';
import './spinner.css';

export type SpinnerClassStyle = 'rxlib-spinner' | 'text-primary' | 'text-secondary' | 'text-success' | 'text-danger' | 'text-warning' | 'text-info' | 'text-light' | 'text-dark';

export interface SpinnerProps {
    classNameDiv?: string;
    classNameSpinner?: string;
    classStyle: SpinnerClassStyle;
}

export default function Spinner({
    classNameDiv,
    classNameSpinner,
    classStyle = 'rxlib-spinner',
}: SpinnerProps) {
    let cssClassNameDiv: string = 'text-center';
    if ((classNameDiv) && (classNameDiv !== '')) {
        cssClassNameDiv = classNameDiv + ' ' + cssClassNameDiv;
    }

    let cssClassNameSpinner: string = 'spinner-border ' + classStyle;
    if ((classNameSpinner) && (classNameSpinner !== '')) {
        cssClassNameSpinner = classNameSpinner + ' ' + cssClassNameSpinner;
    }

    return (
        <div className={cssClassNameDiv}>
            <div className={cssClassNameSpinner} role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
}