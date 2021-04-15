import * as styles from '../components/Table/TableCell.treat';
import { overrides as overridesCheckbox } from '../components/Checkbox/Checkbox.treat';
import { overrides as overridesButton } from '../components/Button/Button.treat';

const TableCellConfig = {
  getWidthClass: width =>
    ({
      auto: `flex__auto ${styles.width.auto}`,
      'flex-1': `flex__col-1 ${styles.width['flex-1']}`,
      'flex-2': `flex__col-2 ${styles.width['flex-2']}`,
      'flex-3': `flex__col-3 ${styles.width['flex-3']}`,
      'flex-4': 'flex__col-4',
    }[width] || ''),
  getTableCellStyle: width => ({
    flex: '0 0 auto',
    msFlex: '0 0 auto',
    WebkitFlex: '0 0 auto',
    width,
  }),
  getAlignClass: align =>
    ({
      left: `text-left ${styles.align.left}`,
      center: `text-center ${styles.align.center}`,
      right: `text-right ${styles.align.right}`,
    }[align] || ''),
  getValignClass: valign =>
    ({
      top: `flex__self-top-y ${styles.vAlign.top}`,
      middle: `flex__self-middle-y ${styles.vAlign.middle}`,
      bottom: `flex__self-bottom-y ${styles.vAlign.bottom}`,
    }[valign] || ''),
  getTextWrapClass: textWrap =>
    ({
      wrap: `table-data__cell--wrap`,
      nowrap: `table-data__cell--nowrap ${styles.textWrap.nowrap}`,
    }[textWrap] || ''),
  cellRoleClass: cellRole =>
    ({
      actions: `table-data__actions ${styles.cellRole.actions} ${overridesButton.tableActionsButton}`,
      heading: `table-data__cell--heading ${styles.cellRole.heading}`,
      checkbox: `table-data__checkbox ${styles.cellRole.checkbox} ${overridesCheckbox.tableCellRoleCheckbox}`,
      dragHandle: `flx-draggable__handle-wrapper  ${styles.cellRole.draghandle}`,
    }[cellRole] || ''),
};

export default TableCellConfig;
